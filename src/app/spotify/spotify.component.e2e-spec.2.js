describe('Spotify', () => {

    beforeEach(() => {
        browser.get('/spotify');
    });

    it('should have <my-spotify>', () => {
        let spotify = element(by.css('my-app my-spotify'));
        expect(spotify.isPresent()).toEqual(true);
    });

});