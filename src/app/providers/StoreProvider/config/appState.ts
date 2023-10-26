import { IUserState } from 'entities/User';
import { ILoginState } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IAppState } from 'app/slice/appSlice';
import { IProfileState } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsRecommendationsState } from 'pages/ArticleDetailsPage';
import { AddCommentFormState } from 'features/addCommentForm';
import { ArticlesPageState } from 'pages/ArticlesPage';
import { ISaveScrollState } from 'features/SaveScroll';
import { ArticleDetailsPageState } from 'pages/ArticleDetailsPage/model/types';
import { IArticleDetailsState } from 'entities/Article';

export interface AppState {
    user: IUserState;
    app: IAppState;
    savedScroll: ISaveScrollState
    profile: IProfileState;

    // async reducers
    login?: ILoginState;
    articlesPage?: ArticlesPageState
    articleDetails?: IArticleDetailsState
    articleDetailsRecommendations?: ArticleDetailsRecommendationsState
    addCommentForm?: AddCommentFormState;
    articleDetailsPage?: ArticleDetailsPageState
}

export type AppStateKey = keyof AppState;
export type MountedReducers = OptionalRecord<AppStateKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<AppState>;
    reduce: (state: AppState, action: AnyAction) => CombinedState<AppState>;
    add: (key: AppStateKey, reducer: Reducer) => void;
    remove: (key: AppStateKey) => void;

    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<AppState> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArguments {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArguments,
    state: AppState,
}
