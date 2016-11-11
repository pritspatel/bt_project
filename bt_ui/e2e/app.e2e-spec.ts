import { BtUiPage } from './app.po';

describe('bt-ui App', function() {
  let page: BtUiPage;

  beforeEach(() => {
    page = new BtUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
