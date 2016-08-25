describe('Artist', () => {

    beforeEach(() => {
        browser.get('/spotify/artist/:id');
    });

    it('should have <my-artist>', () => {
        let artist = element(by.css('my-app my-artist'));
        expect(artist.isPresent()).toEqual(true);
    });

});