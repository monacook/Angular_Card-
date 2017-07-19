import { LSPage } from './app.po';

describe('ls App', () => {
  let page: LSPage;

  beforeEach(() => {
    page = new LSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
