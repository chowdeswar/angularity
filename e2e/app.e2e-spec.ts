import { AngularityPage } from './app.po';

describe('angularity App', () => {
  let page: AngularityPage;

  beforeEach(() => {
    page = new AngularityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
