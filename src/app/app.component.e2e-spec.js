describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual("Angular 2");
    });

    it('should have <header>', () => {
        expect(element(by.css('my-app header')).isPresent()).toEqual(true);
    });

    it('should have <main>', () => {
        expect(element(by.css('my-app main')).isPresent()).toEqual(true);
    });

});