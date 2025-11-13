describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('user', '123').then(() => {
            cy.visit('/articles');
        });
    });

    it.skip('Пример заскипанного теста', () => {
        cy.getByTestId('fk;lsdfk;sf;s').should('exist');
    });

    it('Видит список статей', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
