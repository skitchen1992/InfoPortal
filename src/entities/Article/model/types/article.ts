export enum ARTICLE_BLOCK_TYPE {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string;
    type: ARTICLE_BLOCK_TYPE;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ARTICLE_BLOCK_TYPE.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ARTICLE_BLOCK_TYPE.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ARTICLE_BLOCK_TYPE.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ARTICLE_TYPE {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ARTICLE_TYPE[];
    blocks: ArticleBlock[];
}
