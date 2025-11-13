let articleId: string;

describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login('user', '123').then(() => {
        });
        cy.createArticle().then((article) => {
            articleId = article.id;
            cy.visit(`/articles/${articleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(articleId);
    });

    it('И видит содержимое созданной статьи', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
    });

    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('Text');
        cy.getByTestId('CommentCard.content').should('exist');
    });

    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'FeedBack');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
