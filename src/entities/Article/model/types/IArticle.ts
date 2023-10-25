import { IUser } from 'entities/User';

export enum ARTICLE_BLOCK_TYPE {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface IArticleBlockBase {
    id: string;
    type: ARTICLE_BLOCK_TYPE;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ARTICLE_BLOCK_TYPE.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ARTICLE_BLOCK_TYPE.IMAGE;
    src: string;
    title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ARTICLE_BLOCK_TYPE.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum ARTICLE_TYPE {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ARTICLE_SORT_FIELD {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'created'
}

export enum ARTICLE_VIEW {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface IArticle {
    id: string;
    title: string;
    user: IUser;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ARTICLE_TYPE[];
    blocks: ArticleBlock[];
}
