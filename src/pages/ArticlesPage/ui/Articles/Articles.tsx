import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ARTICLE_VIEW, ArticleList } from 'entities/Article';
import { ReducersList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useInitialEffect } from 'shared/hooks';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { ArticlesFilters } from 'pages/ArticlesPage/ui/ArticlesFilters/ArticlesFilters';
import { useSearchParams } from 'react-router-dom';
import {
    articleDetailsPageRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { getArticlesStateSelector } from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './Articles.module.scss';

const getSkeletons = (view: ARTICLE_VIEW) => new Array(view === ARTICLE_VIEW.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
    articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};

interface IProps {
    className?: string
}
const Articles: FC<IProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const {
        isLoading,
        hasData,
        error,
        articles,
        pageView,
    } = useAppSelector(getArticlesStateSelector);

    useDynamicModuleLoad({ reducers, removeAfterUnmount: false });

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    return (
        <Page onScrollEnd={onLoadNextPart}>
            <ArticlesFilters />
            <NoDataContainer
                isLoading={isLoading}
                loader={(
                    <div className={classNames(cls.skeleton, {}, [className, cls[pageView]])}>
                        {getSkeletons(pageView)}
                    </div>
                )}
                hasData={hasData}
                error={error}
                loaderSize="large"
                className={cls.noData}
            >
                <ArticleList
                    view={pageView}
                    articles={articles}
                />
            </NoDataContainer>
            {isLoading && (
                <div className={classNames(cls.skeleton, {}, [className, cls[pageView]])}>
                    {getSkeletons(pageView)}
                </div>
            )}
        </Page>
    );
};

export default memo(Articles);
