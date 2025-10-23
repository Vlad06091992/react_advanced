export const RouterConfig = {
    MAIN: 'main',
    ARTICLES: 'articles',
    ARTICLE_DETAILS: 'article_details',
    ARTICLE_CREATE: 'article_create',
    ARTICLE_EDIT: 'article_edit',
    ADMIN_PANEL: 'admin_panel',
    PROFILE: 'profile',
    ABOUT: 'about',
    NOT_FOUND: 'not_found',
    FORBIDDEN: 'forbidden'
};
export const RouterPaths = {
    [RouterConfig.MAIN]: '/',
    [RouterConfig.PROFILE]: '/profile/', // +id
    [RouterConfig.ARTICLES]: '/articles',
    [RouterConfig.ARTICLE_DETAILS]: '/articles/', // +id
    [RouterConfig.ARTICLE_CREATE]: '/articles/create', // +id
    [RouterConfig.ARTICLE_EDIT]: '/articles/:id/edit', // +id
    [RouterConfig.ABOUT]: '/about',
    [RouterConfig.ADMIN_PANEL]: '/admin',
    [RouterConfig.FORBIDDEN]: '/forbidden',
    [RouterConfig.NOT_FOUND]: '*',
};
