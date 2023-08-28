import { Article } from './Article';

export interface IArticleDetailsState {
    data: Nullable<Article>
    hasData: boolean,
    error: Nullable<string>
    isLoading: boolean;
}
