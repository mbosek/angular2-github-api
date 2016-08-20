describe('Home', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have <my-home>', () => {
        let home = element(by.css('my-app my-home'));
        expect(home.isPresent()).toEqual(true);
    });

});