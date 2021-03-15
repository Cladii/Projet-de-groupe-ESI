describe('login form', () => {
    beforeEach(() => {
        //constantes définies dans le fichier cypres.json
        //"baseUrl": "http://localhost:8080"
        const api_url = Cypress.config('baseApi')
        //données du test chargées à partir du fichier tests/e2e/fixtures/students.json
        cy.fixture('users.json').as('usersData')
        cy.fixture('users_response.json').as('users_response')

        cy.server()
        //Lorsqu'un test est exécuté, si un appel au backend
        //est effectué, aucune requête ne sera exécutée
        //et le test recevra comme réponse le contenu
        //du fichier tests/e2e/fixtures/students.json
        cy.route("GET", api_url + "/user", '@usersData')
        cy.route("POST", api_url+"/user", '@users_response')

        //Le test commence par visiter la page http://localhost:8080/#/login
        cy.visit('/#/login')
        cy.url().should('eq', 'http://localhost:8080/#/login') 
        cy.visit('/#/students')
        //Le test vérifie que le titre est présent
        cy.contains('h1', 'Login')
        cy.url().should('eq', 'http://localhost:8080/#/login') 
        //cy.location('pathname').should('eq', '/#/login')
    })
        it("verify redirection on fail",() =>{
            //cy.get('button#submit')
            cy.get('[data-cy=username_field]').type('rate').should('have.value', 'rate')
            cy.get('[data-cy=password_field]').type('rate').should('have.value', 'rate')
            cy.get('#login')
            .click()
            cy.url().should('eq', 'http://localhost:8080/#/login') 
            //cy.location('pathname').should('eq', '/#/login')
        })
        it("verify redirection on succes",() =>{
            //cy.get('button#submit')
            cy.get('[data-cy=username_field]').type('admin@admin.com').should('have.value', 'admin@admin.com')
            cy.get('[data-cy=password_field]').type('admin').should('have.value', 'admin')
            cy.get('#login')
            .click()
            cy.url().should('eq', 'http://localhost:8080/#/') 
            //cy.location('pathname').should('eq', '/#/login')
        })
})