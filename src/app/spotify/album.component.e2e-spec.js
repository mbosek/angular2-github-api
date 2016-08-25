describe('Album', () => {

    beforeEach(() => {
        browser.get('/spotify/album/Lid');
    });

    it('should have <my-album>', () => {
        let album = element(by.css('my-app my-album'));
        expect(album.isPresent()).toEqual(true);
    });

});