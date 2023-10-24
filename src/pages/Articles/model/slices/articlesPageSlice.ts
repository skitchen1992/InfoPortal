import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW, IArticle } from 'entities/Article';
import { ArticlesPageState } from 'pages/Articles';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/consts/localStorage';
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
        isLoading: false,
        error: null,
        ids: [],
        entities: {},
        view: ARTICLE_VIEW.SMALL,
        page: 1,
        limit: 0,
        hasMore: true,
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
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ARTICLE_VIEW;
            state.view = view;
            state.limit = view === ARTICLE_VIEW.BIG ? SMALL_PAGE_LIMIT : BIG_PAGE_LIMIT;
            state._inited = true;
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
                state.hasData = Boolean(state.ids.length) || Boolean(action.payload.length);
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = Boolean(action.payload.length);
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
