/// <reference types="cypress" />
describe('End-to-End Tests for Enhanced Scheduling App - MAIN ROUTE', () => {
  
  it('renders the title Scheduling App upon load', () => {
    cy.visit('/');
    cy.get('rux-global-status-bar').shadow().find('h1').should('have.text','TESTSCHEDULING APP');
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
    cy.get('#monthly-calendar').find('div').should('have.length.gte', 7);
  })

})

describe('End-to-End Tests for Enhanced Scheduling App - DEVELOPER ROUTE', () => {
  

})


describe('End-to-End Tests for Enhanced Scheduling App - ADMIN ROUTE', () => {

  const navigate_to_admin = () => {
    cy.visit('/');
    cy.get('a').eq(2).click();
  }
  
  it('renders four buttons on the page for upload, export, adding user, and removing user', () => {
    navigate_to_admin();
    cy.get('rux-button').should('have.length', 4);
  })

  it('displays a user form when the 3rd button (add new user is clicked)', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').should('exist');
  })

})

describe('End-to-End Tests for Enhanced Scheduling App - USER DETAILS ROUTE (e.g. /users/1)', () => {
  
  

})