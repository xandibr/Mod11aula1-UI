/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade:Login', ()=>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', ()=>{
        cy.get('#username').type('cavalcante.teste@teste.com')
        cy.get('#password').type('Botafogo2010')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cavalcante.teste')
    })

    it('Deve exibir uma mensagem de erro ao inserir usário inválido', () => {
        cy.get('#username').type('cavalcante@teste.com')
        cy.get('#password').type('botafogo2010')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
    });
    
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('cavalcante.teste@teste.com')
        cy.get('#password').type('botogo2010')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain','A senha fornecida para o e-mail cavalcante.teste@teste.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve fazer login com sucesso - Usando massas de dados', () => {
        cy.get('#username').type(perfil.usuário)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cavalcante.teste')
        
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then (dados => {
        cy.get('#username').type(dados.usuário)
        cy.get('#password').type(dados.senha, {log : false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cavalcante.teste')
        
    })
        
    });

    it('Deve fazer login com sucesso - Usando Comandos Customizados', ()=>{
        cy.login('cavalcante.teste@teste.com', 'Botafogo2010')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cavalcante.teste')
    })

})