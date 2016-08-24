import { TestBed } from '@angular/core/testing';

import { SpotifyComponent } from './spotify.component';

describe('Spotify Component', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [SpotifyComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(SpotifyComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Spotify Works!');
    expect(true).toBe(true);
  });

});
