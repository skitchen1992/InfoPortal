import { FC, memo, useCallback } from 'react';
import { ArticleDetailsRoot } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { IArticleParams } from 'app/providers/Router/routeConfig/routeConfig';
import { CommentList } from 'entities/Comment';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
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

    useDynamicModuleLoad({ reducers: initialReducers });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <>
            <ArticleDetailsRoot id={articleId} />
            <div style={{ marginTop: '24px' }}>
                <AddCommentForm onSendComment={onSendComment} />
            </div>

            <CommentList />
        </>
    );
};

export default memo(ArticleDetails);
