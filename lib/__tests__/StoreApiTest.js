import StoreApi from '../StoreApi';
import data from '../testData.json';

const store = new StoreApi(data);

describe('StoreApi', () => {

  it('exposes articles as an object', () => {
    // // prep 
    const expectedArticleId = data.articles[0].id;
    const expectedArticleTitle = data.articles[0].title;
    // // call
    const articles = store.getStore().articles;
    // // results
    expect( articles ).toHaveProperty( expectedArticleId );
    expect( articles[expectedArticleId].title ).toBe( expectedArticleTitle );
    expect(2).toBeTruthy();
  });

  it('exposes authors as an object', () => {
    // // prep
    const expectedAuthorId = data.authors[0].id;
    const expectedAuthorFirstName = data.authors[0].firstName;
    // // call
    const authors = store.getStore().authors;
    // // results
    expect(authors).toHaveProperty( expectedAuthorId );
    expect(authors[ expectedAuthorId ].firstName).toBe( expectedAuthorFirstName );
  });

});