describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('user', '123').then(() => {
            cy.visit('/articles');
        });
    });

    // it.skip('Пример заскипанного теста', () => {
    //     cy.getByTestId('fk;lsdfk;sf;s').should('exist');
    // });

    it('На стабах (фикстурах)', () => {
        // cy.intercept('GET', '**/articles?', { fixture: 'articles.json' });
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('Видит список статей', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
