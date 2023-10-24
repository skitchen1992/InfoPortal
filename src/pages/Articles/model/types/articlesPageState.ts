import { EntityState } from '@reduxjs/toolkit';
import { ARTICLE_VIEW, IArticle } from 'entities/Article';

export interface ArticlesPageState extends EntityState<IArticle> {
    hasData: boolean,
    error: Nullable<string>,
    isLoading: boolean,

    view: ARTICLE_VIEW,
    page: number,
    limit?: number,
    hasMore: boolean,

    _inited?: boolean
}
