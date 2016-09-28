import { EbcPage } from './app.po';

describe('ebc App', function() {
  let page: EbcPage;

  beforeEach(() => {
    page = new EbcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
