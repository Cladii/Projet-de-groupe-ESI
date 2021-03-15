describe('user form', () => {
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
        cy.route("POST", api_url + "/user", '@users_response')
        //Ajout du code pour le login à chaque test !!!!!!!!!
        cy.fixture('users.json').as('usersData')
        cy.fixture('users_response.json').as('users_response')
        cy.route("GET", api_url + "/user", '@usersData')
        cy.route("POST", api_url + "/user", '@users_response')
        cy.visit('/#/login')
        //cy.get('button#submit')
        cy.get('[data-cy=username_field]').type('admin@admin.com').should('have.value', 'admin@admin.com')
        cy.get('[data-cy=password_field]').type('admin').should('have.value', 'admin')
        cy.get('#login').click()
        cy.url().should('eq', 'http://localhost:8080/#/')

        //Le test commence par visiter la page http://localhost:8080/#/users
        cy.visit('/#/users')
        //Le test vérifie que le titre est présent
        cy.contains('h3', 'Liste des users')
    })

    it('sort table', () => {
        cy.get('[data-cy=tab-users]').get('th').first().click()
        cy.get('[data-cy=tab-users]').get('th').get('tr').eq(1).should('contain', 'admin@admin.com').and('contain', 'true').and('contain', 'true')
        cy.get('[data-cy=tab-users]').get('th').get('tr').eq(2).should('contain', 'admin2@admin.com').and('contain', 'false').and('contain', 'true')
        cy.get('[data-cy=tab-users]').get('th').get('tr').eq(3).should('contain', 'admin3@admin.com').and('contain', 'true').and('contain', 'false')
        cy.get('[data-cy=tab-users]').get('th').get('tr').eq(4).should('contain', 'admin4@admin.com').and('contain', 'false').and('contain', 'false')
    })

    it('username not email', () => {
        cy.get('[data-cy=form-input-username]').type('azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn').should('have.value', 'azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn')
        cy.get('[data-cy=form-user]').submit()
        cy.get('[data-cy=tab-users]').get('tr').should('have.length', 5)
    })

    it('add user', () => {
        cy.get('[data-cy=form-input-username]').type('admin5@admin.com').should('have.value', 'admin5@admin.com')
        cy.get('[data-cy=form-input-password]').type('admin5').should('have.value', 'admin5')
        cy.get('[data-cy=form-input-isStaff]').type('true').should('have.value', 'ontrue')
        cy.get('[data-cy=form-input-isDirector]').type('true').should('have.value', 'ontrue')
        cy.get('[data-cy=form-user]').submit()

        cy.get('[data-cy=tab-users]').get('tr').last().contains('td', 'admin5@admin.com')
        cy.get('[data-cy=tab-users]').get('tr').last().contains('td', 'true')
        cy.get('[data-cy=tab-users]').get('tr').last().contains('td', 'true')
        cy.get('[data-cy=tab-users]').get('tr').should('have.length', 6)
    })

})