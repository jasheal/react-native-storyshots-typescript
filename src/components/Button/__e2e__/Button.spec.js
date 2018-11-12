describe('Main', () => {
	it('should have button', async () => {
    await expect(element(by.id('TestButton1'))).toExist();
	});
})