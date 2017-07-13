import { TmonDateAppPage } from './app.po';

describe('tmon-date-app App', () => {
  let page: TmonDateAppPage;

  beforeEach(() => {
    page = new TmonDateAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
