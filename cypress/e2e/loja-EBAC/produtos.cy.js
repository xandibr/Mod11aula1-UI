///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('FUNCIONALIDADE: PRODUTOS', () => {

    beforeEach(() => {
        
        produtosPage.vistarUrl()

    });

    it('DEVE SELECIONAR O PRIMEIRO PRODUTO DA LISTA', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

        
    });

    it('DEVE SELECIONAR O ÚLTIMO PRODUTO DA LISTA', () => {
        cy.get('.product-block').last().click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });

    it('DEVE SELECIONAR O QUARTO PRODUTO DA LISTA', () => {
        cy.get('.product-block').eq(4).click()
        cy.get('#tab-title-description > a').should('contain','Descrição')
        
    });

    it('DEVE SELECIONAR UM DETERMINADO PRODUTO DA LISTA', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it('DEVE BUSCAR UM PRODUTO COM SUCESSO', () => {
        let produto= 'Erica Evercool Sports Bra'
        produtosPage.buscarProduto(produto)
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it('DEVE VISITAR A PÁGINA DO PRODUTO', () => {

        produtosPage.visitarProduto('Hawkeye Yoga Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        
    });

    it('DEVE ADICIONAR PRODUTO AO CARRINHO', () => {

        produtosPage.buscarProduto('Grayson Crewneck Sweatshirt')
        produtosPage.addProdutoCarrinho('L', 'Red', 5)
        cy.get('.woocommerce-message').should('contain', ' foram adicionados no seu carrinho')
        
    });
    it.only('DEVE ADICIONAR PRODUTO AO CARRINHO BUSCANDO DA MASSA DE DADOS', () => {

        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)


        })

       
        
    });
});