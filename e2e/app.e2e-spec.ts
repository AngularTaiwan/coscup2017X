import { CoscupPage } from './app.po';

describe('coscup App', () => {
  let page: CoscupPage;

  beforeEach(() => {
    page = new CoscupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
