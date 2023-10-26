export { ArticleDetailsRoot } from './ui/ArticleDetailsRoot/ArticleDetailsRoot';
export { ArticleList } from './ui/ArticleList/ArticleList';
export { ArticleViewSelector } from './ui/ArticleViewSelector/ArticleViewSelector';
export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { ARTICLE_VIEW, ARTICLE_SORT_FIELD, ARTICLE_TYPE } from './model/types/IArticle';
export { getArticleDetailsData } from './model/selectors/articleDetails';
export type { IArticle } from './model/types/IArticle';
export type { IArticleDetailsState } from './model/types/IArticleDetailsState';
