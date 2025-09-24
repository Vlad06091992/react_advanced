import { User } from 'entities/User';

export enum ArticleBlockType {
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
    CODE = 'CODE'
}
export enum ArticlesViewMode {
    SMALL = 'SMALL',
    BIG = 'BIG'
}

export interface ArticleBlocksBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlocksBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlocksBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlocksBase {
    type: ArticleBlockType.TEXT;
    title: string;
    paragraphs: string[];
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
    ALL = 'ALL'
}

// export interface Article {
//     user:User,
//     id: string;
//     title: string;
//     subtitle: string;
//     img: string;
//     views: number;
//     createdAt: string;
//     type: ArticleType[];
//     blocks: ArticleBlock[];
// }

export interface Article {
    user:User,
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export enum ArticleSortFields {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export type SortOrder = 'asc' | 'desc'
