import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'app/providers/StoreProvider';
import {
    ARTICLE_VIEW, IArticle, ARTICLE_SORT_FIELD, ARTICLE_TYPE,
} from 'entities/Article';
import { ArticlesPageState } from 'pages/Articles';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
import { SortOrder } from 'shared/types';
import { BIG_PAGE_LIMIT, SMALL_PAGE_LIMIT } from '../../model/consts/consts';
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
        hasMore: true,
        isLoading: false,
        error: null,
        ids: [],
        entities: {},
        page: 1,
        limit: 0,
        view: ARTICLE_VIEW.SMALL,
        sort: ARTICLE_SORT_FIELD.CREATED,
        order: 'asc',
        search: '',
        type: ARTICLE_TYPE.ALL,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ARTICLE_VIEW>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ARTICLE_SORT_FIELD>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ARTICLE_TYPE>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ARTICLE_VIEW;
            state.view = view;
            state.limit = view === ARTICLE_VIEW.BIG ? SMALL_PAGE_LIMIT : BIG_PAGE_LIMIT;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = null;
                state.isLoading = true;
                state.hasData = false;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.hasData = Boolean(state.ids.length) || Boolean(action.payload.length);
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.hasData = false;
                state.hasMore = false;
                state.error = action.payload || 'error';
            });
    },
});

export const {
    reducer: articlesPageReducer,
    actions: articlesPageActions,
} = articlesPageSlice;
