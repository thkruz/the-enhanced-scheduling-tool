/// <reference types="cypress" />

describe('End-to-End Tests for Enhanced Scheduling App - DEVELOPER ROUTE', () => {
  
  const navigate_to_developers = () => {
    cy.visit('/');
    cy.get('a').eq(1).click();
  }

  it('renders the title Developer Info upon load', () => {
    navigate_to_developers();
    cy.get('rux-global-status-bar').shadow().find('h1').should('have.text','TESTDEVELOPER INFO');
  })

  it('renders cards for the three developers', () => {
    navigate_to_developers();
    cy.contains('Theodore Kruczek');
    cy.contains('TK');
    cy.contains('Collin');
    cy.contains('Public Repos');
  })

})
