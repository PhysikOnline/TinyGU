import { TinyGUPage } from './app.po';

describe('tiny-gu App', () => {
  let page: TinyGUPage;

  beforeEach(() => {
    page = new TinyGUPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
