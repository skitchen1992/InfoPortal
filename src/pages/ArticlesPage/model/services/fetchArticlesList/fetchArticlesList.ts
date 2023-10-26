import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ARTICLE_TYPE, IArticle } from 'entities/Article';
import {
    getArticlesFiltersSelector,
    getArticlesPageLimit,
    getArticlesPageNumber,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface IFetchArticlesListProps{
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
    IArticle[],
    IFetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticlesList',
        async (props, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const limit = getArticlesPageLimit(getState());
            const page = getArticlesPageNumber(getState());

            const {
                order,
                sort,
                search,
                type,
            } = getArticlesFiltersSelector(getState());

            try {
                addQueryParams({
                    order,
                    sort,
                    search,
                    type,
                });

                const response = await extra.api.get<IArticle[]>('/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ARTICLE_TYPE.ALL ? undefined : type,
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
