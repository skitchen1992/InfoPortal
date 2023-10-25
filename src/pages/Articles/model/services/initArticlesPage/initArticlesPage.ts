import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ARTICLE_SORT_FIELD, ARTICLE_TYPE } from 'entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromURL = searchParams.get('order') as SortOrder;
                const sortFromURL = searchParams.get('sort') as ARTICLE_SORT_FIELD;
                const searchFromURL = searchParams.get('search');
                const typeFromURL = searchParams.get('type') as ARTICLE_TYPE;

                if (orderFromURL) {
                    dispatch(articlesPageActions.setOrder(orderFromURL));
                }
                if (sortFromURL) {
                    dispatch(articlesPageActions.setSort(sortFromURL));
                }
                if (searchFromURL) {
                    dispatch(articlesPageActions.setSearch(searchFromURL));
                }
                if (typeFromURL) {
                    dispatch(articlesPageActions.setType(typeFromURL));
                }

                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
