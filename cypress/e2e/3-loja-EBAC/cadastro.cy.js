/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade:Cadastro', ()=>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar cadastro com sucesso', () => {
        
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('@456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        ///cy.wait(5000) se necessário
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    });

    it('Deve completar cadastro com sucesso', () => {

        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('@456')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        ///cy.wait(5000) se necessário
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    });

    it.only('Deve completar cadastro com sucesso - Usando comandos customizados', () => {

        cy.preCadastro (faker.internet.email(),'@456', faker.person.firstName() , faker.person.lastName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
        
    });
})