describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('user', '123').then(() => {
            cy.visit('/articles');
        });
    });

    // afterEach(() => {
    //     cy.resetProfile();
    // });

    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
