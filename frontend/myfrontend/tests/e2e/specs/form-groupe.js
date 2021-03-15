describe('groupe form', () => {
    beforeEach(() => {
        //constantes définies dans le fichier cypres.json
        //"baseUrl": "http://localhost:8080"
        const api_url = Cypress.config('baseApi')
        //données du test chargées à partir du fichier tests/e2e/fixtures/students.json
        cy.fixture('groupes.json').as('groupesData')
        cy.fixture('groupes_response.json').as('groupes_response')

        cy.server()
        //Lorsqu'un test est exécuté, si un appel au backend
        //est effectué, aucune requête ne sera exécutée
        //et le test recevra comme réponse le contenu
        //du fichier tests/e2e/fixtures/students.json
        cy.route("GET", api_url + "/groupe", '@groupesData')
        cy.route("POST", api_url + "/groupe", '@groupes_response')
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
        //Le test commence par visiter la page http://localhost:8080/#/groupe
        cy.visit('/#/groupe')
        //Le test vérifie que le titre est présent
        cy.contains('h3', 'Liste des groupes')
    })

    it('sort table', () => {
        cy.get('[data-cy=tab-groupe]').get('th').first().next().click()
        cy.get('tbody tr').first().contains('td', 'C111')
        cy.get('tbody tr').first().next().contains('td', 'E11')
        cy.get('tbody tr').first().next().next().contains('td', 'E12')
    })

    it('nom blank', () => {
        cy.get('[data-cy=form-groupe]').submit()
        cy.get('[data-cy=tab-groupe]').get('tr').should('have.length', 4)
    })

    it('bloc 0', () => {
        cy.get('[data-cy=form-input-bloc]').type('0').should('have.value', '0')
        cy.get('[data-cy=form-groupe]').submit()
        cy.get('[data-cy=tab-groupe]').get('tr').should('have.length', 4)
    })

    it('bloc 4', () => {
        cy.get('[data-cy=form-input-bloc]').type('4').should('have.value', '4')
        cy.get('[data-cy=form-groupe]').submit()
        cy.get('[data-cy=tab-groupe]').get('tr').should('have.length', 4)
    })

    it('add groupe', () => {
        cy.get('[data-cy=form-input-nom]').type('C112').should('have.value', 'C112')
        cy.get('[data-cy=form-input-bloc]').type('2').should('have.value', '2')
        cy.get('[data-cy=form-groupe]').submit()

        cy.get('[data-cy=tab-groupe]').get('tr').last().contains('td', 'C112')
        cy.get('[data-cy=tab-groupe]').get('tr').last().contains('td', '2')
        cy.get('[data-cy=tab-groupe]').get('tr').should('have.length', 5)
    })

})