import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW, IArticle } from 'entities/Article';
import { ArticlesPageState } from 'pages/Articles';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<AppState>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageState>({
        hasData: false,
        isLoading: false,
        error: null,
        ids: [],
        entities: {},
        view: ARTICLE_VIEW.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ARTICLE_VIEW>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ARTICLE_VIEW;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = null;
                state.isLoading = true;
                state.hasData = false;
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action: PayloadAction<IArticle[]>,
            ) => {
                state.isLoading = false;
                state.hasData = Boolean(action.payload.length);
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.hasData = false;
                state.error = action.payload || 'error';
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
