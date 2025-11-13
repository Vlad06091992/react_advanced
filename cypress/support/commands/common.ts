import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '@/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

const login = (username: string = 'testuser', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8001/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(body),
        );
        return body;
    });
};

const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export { login, getByTestId };
