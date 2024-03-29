import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/IArticle';

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<IArticle>(`/articles/${articleId}`, {
                    params: {
                        _expand: 'user',
                    },
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
