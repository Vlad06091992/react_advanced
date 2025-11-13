import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import {User} from "@/entities/User";
import {selectByTestId} from "../../helpers/selectByTestId";

const addComment = (text: string) => {
  cy.getByTestId('AddCommentForm.input').clear().type(text)
  cy.getByTestId('AddCommentForm.button').click()
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export {addComment};

