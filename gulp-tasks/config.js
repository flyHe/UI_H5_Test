import parseArgs from 'minimist';

export const config = {
  testFile: './tests/wdio.conf.js',
  reportsDir: './reports',
  reportsFile: 'report.zip',
  email: {
    name: 'flyHe',
    user: '15657872985@163.com',
    pass: 'passOfUser',
    to: '1024929125@qq.com',
    subject: `Test Report: ${new Date()}`
  },
  cloptions: parseArgs(process.argv.slice(2), ({
    string: ['tags'],
    alias: {
      t: 'tags',
    },
    default: {},
  })),
};
export default config;
