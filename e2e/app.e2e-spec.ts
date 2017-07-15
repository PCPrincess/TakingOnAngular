import { AngularAppNo1Page } from './app.po';

describe('angular-app-no1 App', () => {
  let page: AngularAppNo1Page;

  beforeEach(() => {
    page = new AngularAppNo1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
