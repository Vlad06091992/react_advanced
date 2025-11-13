describe('Заходим на странницу профиля', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.login('user', '123').then((user) => {
            cy.visit(`/profile/${user.id}`);
        });
    });

    afterEach(() => {
        cy.resetProfile();
    });

    it('профиль успешно загружается', () => {
        cy.getByTestId('ProfilePage').should('exist');
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Владислав');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'Суетин');
    });

    it('редактируем профиль', () => {
        const firstname = 'new';
        const lastname = 'lastname';
        cy.updateProfile(firstname, lastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname);
    });
});
