describe('ue form', () => {
    beforeEach(() => {
        //constantes définies dans le fichier cypres.json
        //"baseUrl": "http://localhost:8080"
        const api_url = Cypress.config('baseApi')
        //données du test chargées à partir du fichier tests/e2e/fixtures/students.json
        cy.fixture('ues.json').as('uesData')
        cy.fixture('ues_response.json').as('ues_response')

        cy.server()
        //Lorsqu'un test est exécuté, si un appel au backend
        //est effectué, aucune requête ne sera exécutée
        //et le test recevra comme réponse le contenu
        //du fichier tests/e2e/fixtures/students.json
        cy.route("GET", api_url + "/ue", '@uesData')
        cy.route("POST", api_url + "/ue", '@ues_response')
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

        //Le test commence par visiter la page http://localhost:8080/#/ue
        cy.visit('/#/ue')
        //Le test vérifie que le titre est présent
        cy.contains('h3', 'Liste des UE')
    })

    it('sort table', () => {
        cy.get('[data-cy=tab-ues]').get('th').first().click()
        cy.get('tbody tr').first().contains('td', 'Odoo')
        cy.get('tbody tr').first().next().contains('td', 'Projet')
        cy.get('tbody tr').first().next().next().contains('td', 'Stage')
    })

    it('libelle too BIG', () => {
        cy.get('[data-cy=form-input-libelle]').type('azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn').should('have.value', 'azertyuiopqsdfghjklmwxcvbnazertyuiopqsdfghjklmwxcvbn')
        cy.get('[data-cy=form-input-acronyme]').type('PRJ').should('have.value', 'PRJ')
        cy.get('[data-cy=form-input-credits]').type('5').should('have.value', '5')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })
    it('libelle to small', () => {
        cy.get('[data-cy=form-input-libelle]').type('l').should('have.value', 'l')
        cy.get('[data-cy=form-input-acronyme]').type('PRJ').should('have.value', 'PRJ')
        cy.get('[data-cy=form-input-credits]').type('5').should('have.value', '5')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })
    it('no libelle', () => {
        cy.get('[data-cy=form-input-acronyme]').type('PRJ').should('have.value', 'PRJ')
        cy.get('[data-cy=form-input-credits]').type('5').should('have.value', '5')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })
    it('acronym too BIG', () => {
        cy.get('[data-cy=form-input-libelle]').type('libelle').should('have.value', 'libelle')
        cy.get('[data-cy=form-input-acronyme]').type('unAcronymTropLong').should('have.value', 'unAcronymTropLong')
        cy.get('[data-cy=form-input-credits]').type('5').should('have.value', '5')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })
    it('acronym too small', () => {
        cy.get('[data-cy=form-input-libelle]').type('libelle').should('have.value', 'libelle')
        cy.get('[data-cy=form-input-acronyme]').type('a').should('have.value', 'a')
        cy.get('[data-cy=form-input-credits]').type('5').should('have.value', '5')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })
    it('credits negatifs', () => {
        cy.get('[data-cy=form-input-libelle]').type('libelle').should('have.value', 'libelle')
        cy.get('[data-cy=form-input-acronyme]').type('acro').should('have.value', 'acro')
        cy.get('[data-cy=form-input-credits]').type('-5').should('have.value', '-5')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })
    it('credits to big', () => {
        cy.get('[data-cy=form-input-libelle]').type('libelle').should('have.value', 'libelle')
        cy.get('[data-cy=form-input-acronyme]').type('acro').should('have.value', 'acro')
        cy.get('[data-cy=form-input-credits]').type('51').should('have.value', '51')
        cy.get('[data-cy=form-add-ue]').submit()
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 4)
    })

    it('add UE', () => {
        cy.get('[data-cy=form-input-libelle]').type('Gestion de Projet').should('have.value', 'Gestion de Projet')
        cy.get('[data-cy=form-input-acronyme]').type('PRJ').should('have.value', 'PRJ')
        cy.get('[data-cy=form-input-credits]').type('5').should('have.value', '5')
        cy.get('[data-cy=form-add-ue]').submit()

        cy.get('[data-cy=tab-ues]').get('tr').last().contains('td', 'Gestion de Projet')
        cy.get('[data-cy=tab-ues]').get('tr').last().contains('td', 'PRJ')
        cy.get('[data-cy=tab-ues]').get('tr').last().contains('td', '5')
        cy.get('[data-cy=tab-ues]').get('tr').should('have.length', 5)
    })

})