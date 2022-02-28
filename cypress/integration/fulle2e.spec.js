/// <reference types="cypress" />

describe('End-to-End Tests for Enhanced Scheduling App', () => {
  
  it('renders the title Scheduline App upon load', () => {
    cy.visit('/');
    cy.get('#title').should('have.text', "Scheduling App");
  })

  it('renders the Quick Navigation list on load', () => {
    cy.visit('/');
    cy.get('#quickNavigationList').find('li').should('have.length', 3);
  });

  it('renders the roster of members on load ', () => {
    cy.visit('/');
    cy.get('#rosterList').find('li').should('have.length.gte', 1);
  })

  it('renders a Download button on load', () => {
    cy.visit('/');
    cy.get('#downloadButton').should('have.text','Download');
  })

  it('renders at least 7 schedule days on load', () => {
    cy.visit('/');
    cy.get('.shiftCard').should('have.length.gte', 7);
  })


})