/// <reference types="cypress" />

describe('End-to-End Tests for Enhanced Scheduling App', () => {
  
  it('renders the Quick Navigation list on load', () => {
    cy.get('#quickNavigationList').find('li').should('have.length', 3);
  });

})