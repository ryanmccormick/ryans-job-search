import { JobsearchPage } from './app.po';

describe('jobsearch App', () => {
  let page: JobsearchPage;

  beforeEach(() => {
    page = new JobsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Find Jobs');
  });
});
