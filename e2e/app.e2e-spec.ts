import { AmplifyAngularPage } from './app.po';

describe('amplify-angular App', function() {
  let page: AmplifyAngularPage;

  beforeEach(() => {
    page = new AmplifyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
