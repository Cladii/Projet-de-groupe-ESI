describe('prerequis form', () => {
    beforeEach(() => {
        //constantes définies dans le fichier cypres.json
        //"baseUrl": "http://localhost:8080"
        const api_url = Cypress.config('baseApi')
        //données du test chargées à partir du fichier tests/e2e/fixtures/students.json
        cy.fixture('ues.json').as('uesData')
        cy.fixture('prerequis.json').as('prerequisData')
        cy.fixture('prerequis_response.json').as('prerequis_reponse')
        cy.fixture('users.json').as('usersData')
        cy.fixture('users_response.json').as('users_response')
        cy.server()
        //Lorsqu'un test est exécuté, si un appel au backend
        //est effectué, aucune requête ne sera exécutée
        //et le test recevra comme réponse le contenu
        //du fichier tests/e2e/fixtures/students.json
        cy.route("GET", api_url + "/prerequis", '@prerequisData')
        cy.route("GET", api_url + "/ue", '@uesData')
        cy.route("POST", api_url+"/prerequis", '@prerequis_reponse')
        cy.route("GET", api_url + "/user", '@usersData')
        cy.route("POST", api_url+"/user", '@users_response')

        //Le test commence par visiter la page http://localhost:8080/#/ue
        cy.visit('/#/login')
 
            //cy.get('button#submit')
            cy.get('[data-cy=username_field]').type('admin@admin.com').should('have.value', 'admin@admin.com')
            cy.get('[data-cy=password_field]').type('admin').should('have.value', 'admin')
            cy.get('#login')
            .click()
            cy.url().should('eq', 'http://localhost:8080/#/') 
            //cy.location('pathname').should('eq', '/#/login')
        cy.visit('/#/prerequis')
        //Le test vérifie que le titre est présent
        cy.contains('h1', 'LISTE DES PREREQUIS')
    })

    it('sort table', () => {
        cy.get('[data-cy=tab_prerequis]').get('th').first().click()
        cy.get('tbody tr').first().contains('td', 'CPT2')
        cy.get('tbody tr').first().next().contains('td', 'ORG')
    })
    it('add prerequis', () =>{
        cy.get('[data-cy=ue_selected').select('PRJG5')
        cy.get('[data-cy=prerequis_selected]').select('ERPG5')
        cy.get('[data-cy=prerequis_button]').click()
        cy.get('[data-cy=tab_prerequis]').get('tr').last().contains('td', 'PRJG5')
    })

})