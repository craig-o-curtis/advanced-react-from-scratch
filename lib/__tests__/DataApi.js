import DataApi from '../DataApi';
import data from '../testData.json';

const api = new DataApi(data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    // prep 
    const expectedArticleId = data.articles[0].id;
    const expectedArticleTitle = data.articles[0].title;
    // call
    const articles = api.getArticles();
    // results
    expect( articles ).toHaveProperty( expectedArticleId );
    expect( articles[expectedArticleId].title ).toBe( expectedArticleTitle );
  });

  it('exposes authors as an object', () => {
    // prep
    const expectedAuthorId = data.authors[0].id;
    const expectedAuthorFirstName = data.authors[0].firstName;
    // call
    const authors = api.getAuthors();
    // results
    expect(authors).toHaveProperty( expectedAuthorId );
    expect(authors[ expectedAuthorId ].firstName).toBe( expectedAuthorFirstName );
  });

});