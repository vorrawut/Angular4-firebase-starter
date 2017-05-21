import { ToirePage } from './app.po';

describe('toire App', () => {
  let page: ToirePage;

  beforeEach(() => {
    page = new ToirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
