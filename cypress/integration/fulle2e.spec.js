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

describe('End-to-End Tests for Enhanced Scheduling App - ADMIN ROUTE', () => {

  const navigate_to_admin = () => {
    cy.visit('/');
    cy.get('a').eq(2).click();
  }

  it('renders the title Admin Page upon load', () => {
    navigate_to_admin();
    cy.get('rux-global-status-bar').shadow().find('h1').should('have.text','TESTADMIN PAGE');
  })
  
  it('renders four buttons on the page for upload, export, adding user, and removing user', () => {
    navigate_to_admin();
    cy.get('rux-button').should('have.length', 4);
  })

  it('displays a user form when the 3rd button (add new user is clicked)', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').should('exist');
  })

  it('has an input field for first name when adding a new user', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').find('rux-input').eq(0).invoke('attr', 'placeholder').should('contain', 'Enter First Name');
  })

  it('has an input field for last name when adding a new user', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').find('rux-input').eq(1).invoke('attr', 'placeholder').should('contain', 'Enter Last Name');
  })

  it('has a radio group with three shift options when adding a new user', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').find('rux-radio').should('have.length', 3);
  })

  it('first option is Day', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').find('rux-radio').eq(0).invoke('attr', 'value').should('contain', 'day');
  })

  it('second option is Swing', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('form').find('rux-radio').eq(1).invoke('attr', 'value').should('contain', 'swing');
  })

  it('third option is Mid', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
  })

  it('adds a new user to the roster after filling out and submitting the form', () => {
    navigate_to_admin();
    cy.get('rux-button').eq(2).click();
    cy.get('rux-input').eq(0).shadow().find('input').invoke('width','20px');
    cy.get('rux-input').eq(0).shadow().find('input').invoke('height','20px');
    cy.get('rux-input').eq(0).shadow().find('input').invoke('show').should('be.visible');
    cy.get('rux-input').eq(0).shadow().find('input').type('Tony');
    cy.get('rux-input').eq(1).shadow().find('input').invoke('width','20px');
    cy.get('rux-input').eq(1).shadow().find('input').invoke('height','20px');
    cy.get('rux-input').eq(1).shadow().find('input').invoke('show').should('be.visible');
    cy.get('rux-input').eq(1).shadow().find('input').type('Kelly');
    cy.get('form').find('rux-button').click();
    cy.get('#rosterList').find('li').contains('Tony Kelly');
  })

  it('shows an alert if the first name field is empty on add user', function(){
    navigate_to_admin();
    const stub = cy.stub()  
    cy.on('window:alert', stub)
    cy.get('rux-button').eq(2).click();
    cy.get('rux-input').eq(0).shadow().find('input').invoke('width','20px');
    cy.get('rux-input').eq(0).shadow().find('input').invoke('height','20px');
    cy.get('rux-input').eq(0).shadow().find('input').invoke('show').should('be.visible');
    cy.get('rux-input').eq(0).shadow().find('input').type('Tony');
    cy.get('form').find('rux-button').click();
    cy.then(() => {
      expect(stub.getCall(0)).to.be.calledWith('First and Last Name Required!')      
    });

})

  it('removes one or more users when using the Remove User button', () => {
    navigate_to_admin();
    cy.get('#rosterList').find('li').contains('John Doe');
    cy.get('rux-button').eq(3).click();
    cy.get('rux-checkbox').should('have.length.gte', 1);
    cy.get('rux-checkbox').eq(0).shadow().find('input').invoke('width','20px');
    cy.get('rux-checkbox').eq(0).shadow().find('input').invoke('height','20px');
    cy.get('rux-checkbox').eq(0).shadow().find('input').invoke('show').should('be.visible');
    cy.get('rux-checkbox').eq(0).shadow().find('input').click();
    cy.get('rux-button').click();
    cy.get('#rosterList').find('li').contains('John Doe').should('not.exist');
  })
    
})

describe('End-to-End Tests for Enhanced Scheduling App - USER DETAILS ROUTE (e.g. /users/1)', () => {
  
  const navigate_to_user_details = () => {
    cy.visit('/');
    cy.get('#rosterList').find('li').should('have.length.gte', 1);
    cy.get('a').eq(3).click();
  }

  it('renders the title Member Availability upon load', () => {
    navigate_to_user_details();
    cy.get('rux-global-status-bar').shadow().find('h1').should('have.text','TESTMEMBER AVAILABILITY');
  })

  it('renders the first name of a user upon load', () => {
    navigate_to_user_details();
    cy.get("#userDetailsFirstName").contains("John");
  })
  
  it('renders the last name of a user upon load', () => {
    navigate_to_user_details();
    cy.get("#userDetailsLastName").contains("Doe");
  })
  
  it('renders a preference select of a user upon load', () => {
    navigate_to_user_details();
    cy.get("rux-select").shadow().find('option').should('have.length', 3);
  })

  it('renders a preference selection option 1 should be day', () => {
    navigate_to_user_details();
    cy.get("rux-select").shadow().find('option').eq(0).contains('Day');
  })

  it('renders a preference selection option 2 should be swing', () => {
    navigate_to_user_details();
    cy.get("rux-select").shadow().find('option').eq(1).contains('Swing');
  })

  it('renders a preference selection option 3 should be mid', () => {
    navigate_to_user_details();
    cy.get("rux-select").shadow().find('option').eq(2).contains('Mid');
  })

  it('renders the dates on the page', () => {
    navigate_to_user_details();
    cy.contains('Sat Jan 01 2022');
  })})