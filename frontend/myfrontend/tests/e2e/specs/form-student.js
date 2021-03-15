describe('student form', () => {
    beforeEach(() => {
        //constantes définies dans le fichier cypres.json
        //"baseUrl": "http://localhost:8080"
        const api_url = Cypress.config('baseApi')
        //données du test chargées à partir du fichier tests/e2e/fixtures/students.json
        cy.fixture('students.json').as('studentsData')

        cy.server()
        //Lorsqu'un test est exécuté, si un appel au backend
        //est effectué, aucune requête ne sera exécutée
        //et le test recevra comme réponse le contenu
        //du fichier tests/e2e/fixtures/students.json
        cy.route("GET", api_url + "/students", '@studentsData')
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
        //Le test commence par visiter la page http://localhost:8080/#/students
        cy.visit('/#/students')
        //Le test vérifie que le titre est présent
        cy.contains('h1', 'Liste d\'étudiants')
    })

    it('sort table', () => {
        cy.get('[data-cy=tab_students]').get('th').first().click()
        cy.get('tbody tr').first().contains('td', '12345')
        cy.get('tbody tr').first().next().contains('td', '51203')
        cy.get('tbody tr').first().next().next().contains('td', '64321')
    })
})