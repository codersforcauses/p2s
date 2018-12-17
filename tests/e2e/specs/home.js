// https://docs.cypress.io/api/introduction/api.html

describe('Landing Test', () => {
  it('Visits the app root url and finds VueJS logo', () => {
    cy.visit('/');
    cy.get('div[class="home"]').find('img').should('be.visible');
  });
});
