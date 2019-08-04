/**
 * Check if the given element is (not) visible
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
export const isVisible = (element, falseCase) => {
  $(element).waitForExist(10000);
  let visible = $(element).isDisplayed();
  visible = visible instanceof Array ? visible.reduce((pre, cur) => pre && cur, true) : visible;
  if (falseCase) {
    expect(visible).to.not.equal(true, `Expected element "${element}" not to be visible`);
  } else {
    expect(visible).to.equal(true, `Expected element "${element}" to be visible`);
  }
};

export default isVisible;
