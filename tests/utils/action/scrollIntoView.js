/**
 * Excute script to scroll element into view to top or bottom of page
 * @param  {String}   element Element selector
 * @param {Boolean}   alignToTop If true, the top of the element will be aligned to the top of the visible area
 *  of the scrollable ancestor. This is the default value.
 */
export const scrollIntoView = (element, alignToTop) => {
  browser.execute((Selector, Top) => {
    document.querySelector(Selector).scrollIntoView(Top, { behavior: 'instant' });
  }, element, !!alignToTop);

  browser.pause(500);
};

export default scrollIntoView;
