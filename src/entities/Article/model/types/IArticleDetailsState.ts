import { IArticle } from './IArticle';

export interface IArticleDetailsState {
    data: Nullable<IArticle>
    hasData: boolean,
    error: Nullable<string>
    isLoading: boolean;
}
