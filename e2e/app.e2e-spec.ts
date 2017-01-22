import { FilAppPage } from './app.po';

describe('fil-app App', function() {
  let page: FilAppPage;

  beforeEach(() => {
    page = new FilAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
