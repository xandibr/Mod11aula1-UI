///<reference types="cypress"/>

describe('FUNCIONALIDADE: PRODUTOS', () => {

    beforeEach(() => {
        
        cy.visit('produtos')
        
    });

    it('DEVE SELECIONAR UM PRODUTO DA LISTA', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

        
    });

    it('DEVE SELECIONAR UM PRODUTO DA LISTA', () => {
        cy.get('.product-block').last().click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });

    it('DEVE SELECIONAR UM PRODUTO DA LISTA', () => {
        cy.get('.product-block').eq(4).click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
        
    });

    it('DEVE SELECIONAR UM PRODUTO DA LISTA', () => {
        cy.get('.product-block').contains('Atlas Fitness Tank').click()
        
    });
});