import { SaiPage } from './app.po';

describe('sai App', () => {
  let page: SaiPage;

  beforeEach(() => {
    page = new SaiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
