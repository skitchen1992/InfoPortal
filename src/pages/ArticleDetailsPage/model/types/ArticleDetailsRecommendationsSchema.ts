import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'entities/Article';

export interface ArticleDetailsRecommendationsState extends EntityState<IArticle>{
    hasData: boolean,
    error: Nullable<string>
    isLoading: boolean;
}
