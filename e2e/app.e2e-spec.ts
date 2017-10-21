import { GooglemapappPage } from './app.po';

describe('googlemapapp App', () => {
  let page: GooglemapappPage;

  beforeEach(() => {
    page = new GooglemapappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
