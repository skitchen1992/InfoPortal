import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ARTICLE_VIEW, ArticleList, ArticleViewSelector } from 'entities/Article';
import { ReducersList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { useInitialEffect } from 'shared/hooks';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/Articles/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesStateSelector } from '../../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './Articles.module.scss';

interface IProps {
    className?: string
}

const getSkeletons = (view: ARTICLE_VIEW) => new Array(view === ARTICLE_VIEW.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};
const Articles: FC<IProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const {
        isLoading,
        hasData,
        error,
        articles,
        pageView,
    } = useAppSelector(getArticlesStateSelector);

    useDynamicModuleLoad({ reducers });

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    });

    const onChangeView = useCallback((view: ARTICLE_VIEW) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    return (
        <Page onScrollEnd={onLoadNextPart}>
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
            >
                <div className={cls.root}>
                    <ArticleViewSelector view={pageView} onViewClick={onChangeView} />
                    <ArticleList
                        view={pageView}
                        articles={articles}
                    />
                </div>
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
