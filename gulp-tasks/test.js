import gulp from 'gulp';
import del from 'del';
import fs from 'fs';
import Launcher from '@wdio/cli';
import report from 'multiple-cucumber-html-reporter';
import zip from 'gulp-zip';
import mailer from 'nodemailer';
import { config } from './config';

const {
  testFile,
  cloptions: { baseUrl, tags: tagExpression },
  reportsFile, reportsDir,
  email: {
    name, user, pass, to, subject,
  },
} = config;

gulp.task('test:reports:clean', () => del([config.reportsDir], {
  force: true
}));

gulp.task('test:e2e:run', async (done) => {
  const launcher = new Launcher(testFile, {
    baseUrl,
    cucumberOpts: {
      tagExpression,
    },
  });
  try {
    const exitCode = await launcher.run();
    console.info('test is finished with code:', exitCode);
  } catch (err) {
    console.error('Launcher failed to start the test', err.stacktrace);
  }
  done();
});

gulp.task('test:reports:generate', async (done) => {
  report.generate({
    jsonDir: `${reportsDir}/json/`,
    reportPath: `${reportsDir}/html/`,
    metadata: {
      browser: {
        name: 'chrome',
      },
      device: 'iPhone 8',
      platform: {
        name: 'macOs',
      },
    }
  });
  done();
});

gulp.task('test:reports:zip', () => gulp.src(`${reportsDir}/html/**/*`)
  .pipe(zip(reportsFile))
  .pipe(gulp.dest(reportsDir)));

gulp.task('test:reports:send', gulp.series('test:reports:zip', async () => {
  const data = await fs.readFileSync(`${reportsDir}/${reportsFile}`);
  const transporter = mailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user,
      pass,
    }
  });
  await transporter.sendMail({
    from: `${name} <${user}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    text: subject, // plain text body
    html: `<b>${subject}</b>`, // html body
    attachments: [{
      filename: reportsFile,
      content: data,
    }]
  });
}));

gulp.task('test:e2e:end', () => {
  process.exit(0); // an issue here for webdriveio, Launcher process is still runing
});

gulp.task('test:e2e:local', gulp.series('test:reports:clean', 'test:e2e:run', 'test:reports:generate', 'test:e2e:end'));

gulp.task('test:e2e', gulp.series('test:reports:clean', 'test:e2e:run', 'test:reports:generate', 'test:reports:send', 'test:e2e:end'));
