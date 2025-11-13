const updateProfile = (firstName: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.wait(1000);
    cy.getByTestId('ProfileCard.firstname').clear().type(firstName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

const resetProfile = () =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8001/profile/${2}`,
        headers: {
            Authorization: 'fjklsdfs',
        },
        body: {
            id: '2',
            first: 'Владислав',
            lastname: 'Суетин',
            age: 33,
            currency: 'RUB',
            country: 'Russia',
            city: 'Gelendzhik',
            username: 'sueta',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            resetProfile(): Chainable<void>;
            updateProfile(firstname: string, lastname: string): Chainable<void>;
        }
    }
}

export { resetProfile, updateProfile };
