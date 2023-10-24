import { IUserState } from 'entities/User';
import { ILoginState } from 'features/AuthByUserName';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IAppState } from 'app/slice/appSlice';
import { IProfileState } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { IArticleDetailsState } from 'entities/Article';
import { ArticleDetailsCommentsState } from 'pages/ArticleDetails';
import { AddCommentFormState } from 'features/addCommentForm';
import { ArticlesPageState } from 'pages/Articles';
import { ISaveScrollState } from 'features/SaveScroll';

export interface AppState {
    user: IUserState;
    app: IAppState;
    savedScroll: ISaveScrollState
    profile: IProfileState;

    // async reducers
    login?: ILoginState;
    articlesPage?: ArticlesPageState
    articleDetails?: IArticleDetailsState
    articleDetailsComments?: ArticleDetailsCommentsState
    addCommentForm?: AddCommentFormState;

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
