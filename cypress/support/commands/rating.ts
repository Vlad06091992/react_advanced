const setRate = (starCount: number, feedback:string = 'feedback') => {
    cy.getByTestId(`RatingCard.${starCount}`).click();
    cy.getByTestId('RatingCard.input').type(feedback);
    cy.getByTestId('RatingCard.send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starCount: number, feedback:string): Chainable<void>
        }
    }
}

export { setRate };
