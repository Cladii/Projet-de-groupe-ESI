// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMatricule', (matricule) => {
    cy.get('[data-cy=form-input-matricule]')
        .type(matricule)
        .should('have.value', matricule)
})

Cypress.Commands.add('fillFirstName', (first_name) => {
    cy.get('[data-cy=form-input-firstname]')
        .type(first_name)
        .should('have.value', first_name)
})

Cypress.Commands.add('fillLastName', (last_name) => {
    cy.get('[data-cy=form-input-lastname]')
        .type(last_name)
        .should('have.value', last_name)
})

Cypress.Commands.add('submitAndCheckErrors', () => {
    cy.get('[data-cy=form-student]').submit()

    cy.get('[data-cy=error-message]')
        .contains("Les données sont incorrectes")

    cy.get('[data-cy=tab_students]').get('tr')
        .should('have.length', 4)
})

Cypress.Commands.add('getLastRow', () => {
    cy.get('[data-cy=tab_students]').get('tr').last()
})

Cypress.Commands.add('checkFormIsClean', () => {
    cy.get('[data-cy=form-input-matricule]')
        .should('be.empty')

    cy.get('[data-cy=form-input-firstname]')
        .should('be.empty')

    cy.get('[data-cy=form-input-lastname]')
        .should('be.empty')
})
