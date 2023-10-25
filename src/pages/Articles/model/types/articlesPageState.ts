import { EntityState } from '@reduxjs/toolkit';
import {
    ARTICLE_VIEW, IArticle, ARTICLE_SORT_FIELD, ARTICLE_TYPE,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageState extends EntityState<IArticle> {
    hasData: boolean,
    error: Nullable<string>,
    isLoading: boolean,

    // pagination
    page: number,
    limit: number,
    hasMore: boolean,

    // sort
    view: ARTICLE_VIEW,
    order: SortOrder,
    sort: ARTICLE_SORT_FIELD,
    search: string,
    type: ARTICLE_TYPE

    _inited?: boolean
}
