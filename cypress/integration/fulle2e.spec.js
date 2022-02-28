/// <reference types="cypress" />

describe('End-to-End Tests for Enhanced Scheduling App', () => {
  
  it('renders the Quick Navigation list on load', () => {
    cy.visit('/');
    cy.get('#quickNavigationList').find('li').should('have.length', 3);
  });

  it('renders the roster of members upon loading ', () => {
    cy.visit('/');
    cy.get('#rosterList').find('li').should('have.length.gte', 1);
  })
  
})