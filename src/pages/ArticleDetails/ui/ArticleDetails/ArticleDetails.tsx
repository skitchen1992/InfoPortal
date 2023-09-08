import { FC, memo } from 'react';
import { ArticleDetailsRoot } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { IArticleParams } from 'app/providers/Router/routeConfig/routeConfig';
import { Typography } from 'shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';

const initialReducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetails: FC = () => {
    const { articleId } = useParams<IArticleParams>();

    const dispatch = useAppDispatch();

    useDynamicModuleLoad({ reducers: initialReducers, removeAfterUnmount: true });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    return (
        <>
            <ArticleDetailsRoot id={articleId} />
            <CommentList />
        </>
    );
};

export default memo(ArticleDetails);
