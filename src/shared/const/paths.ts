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
    FORBIDDEN: 'forbidden',
};

export const getRouteMain = () => '/';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/create';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAbout = () => '/about';
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';
