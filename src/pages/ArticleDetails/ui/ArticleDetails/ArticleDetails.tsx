import { FC, memo, useCallback } from 'react';
import { ArticleDetailsRoot, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { IArticleParams, RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { CommentList } from 'entities/Comment';
import { useDynamicModuleLoad } from 'shared/hooks';
import { ReducersList } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { AddCommentForm } from 'features/addCommentForm';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { Typography } from 'shared/ui/Typography/Typography';
import { getCommentsStateSelector } from '../../model/selectors/comments';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticlesDetails.module.scss';

const initialReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetails: FC = () => {
    const { articleId } = useParams<IArticleParams>();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation('article-details');
    const recommendations = useAppSelector(getArticleRecommendations.selectAll);
    const {
        isLoading, hasData, error, comments,
    } = useAppSelector(getCommentsStateSelector);

    useDynamicModuleLoad({ reducers: initialReducers });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <Page>
            <Button onClick={onBackToList}>
                {t('label.back_to_articles')}
            </Button>
            <ArticleDetailsRoot id={articleId} />
            <div style={{ marginTop: '24px' }}>
                <Typography variant="h5">
                    {t('label.recommend')}
                </Typography>
            </div>
            <ArticleList target="_blank" articles={recommendations} className={cls.recommendations} />

            <div style={{ marginTop: '24px' }}>
                <AddCommentForm onSendComment={onSendComment} />
            </div>
            <CommentList comments={comments} isLoading={isLoading} hasData={hasData} error={error} />
        </Page>
    );
};

export default memo(ArticleDetails);
