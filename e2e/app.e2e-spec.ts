import { AtpPage } from './app.po';

describe('atp App', () => {
  let page: AtpPage;

  beforeEach(() => {
    page = new AtpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
