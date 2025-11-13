import {Article} from "@/entities/Article";

const defaultArticle = {
    "id": "777",
    "title": "Ruby news",
    "subtitle": "Что нового в JS за 2022 год?",
    "img": "https://res.cloudinary.com/practicaldev/image/fetch/s--oqV3akcU--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/pgnw91fs7tpxn0wyeqh2.jpg",
    "views": 100,
    "createdAt": "21.02.2022",
    "userId": "1",
    "type": [
        "IT"
    ],
    "blocks": []
};

const authorization = 'authorization';

const createArticle = (article?:Article) => cy.request({
    method: 'POST',
    url: `http://localhost:8001/articles`,
    headers: {
        Authorization:authorization,
    },
    body:article || defaultArticle,
}).then((res)=>{
    return res.body;
});


const removeArticle = (articleId:string = defaultArticle.id) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8001/articles/${articleId}`,
    headers: {
        Authorization: authorization
    },
});

export {createArticle,removeArticle};


declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?:Article): Chainable<Article>
            removeArticle(): Chainable<void>
        }
    }
}


