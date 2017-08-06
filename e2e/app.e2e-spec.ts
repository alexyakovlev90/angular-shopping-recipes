import { ShoppingRecipesPage } from './app.po';

describe('shopping-recipes App', () => {
  let page: ShoppingRecipesPage;

  beforeEach(() => {
    page = new ShoppingRecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
