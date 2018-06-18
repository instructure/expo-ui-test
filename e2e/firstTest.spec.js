describe('counterapp', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })
  
  it('Has 2 buttons and label', async () => {
    await expect(element(by.id('increment'))).toBeVisible()
    await expect(element(by.id('decrement'))).toBeVisible()
	await expect(element(by.id('count'))).toBeVisible()
  })  
  
  it('tap 2 increment, 1 decrement = 1', async () => {
	  await element(by.id('increment')).tap()
	  await element(by.id('increment')).tap()
	  await element(by.id('decrement')).tap()
  	  await expect(element(by.id('count'))).toHaveText('1')
  })
})