import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'entities/Comment';

export interface ArticleDetailsCommentsState extends EntityState<IComment>{
    hasData: boolean,
    error: Nullable<string>
    isLoading: boolean;
}
