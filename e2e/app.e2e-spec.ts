import { ArijusgPage } from './app.po';

describe('arijusg App', () => {
  let page: ArijusgPage;

  beforeEach(() => {
    page = new ArijusgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
