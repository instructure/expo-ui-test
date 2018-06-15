describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('Has 2 buttons', async () => {
    await expect(element(by.id('button.increment'))).toBeVisible();
    await expect(element(by.id('button.decrement'))).toBeVisible();
  });  
})