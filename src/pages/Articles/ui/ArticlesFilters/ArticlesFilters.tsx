import { FC, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ARTICLE_SORT_FIELD, ARTICLE_VIEW, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/Articles/model/slices/articlesPageSlice';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    getArticlesFiltersSelector,
} from 'pages/Articles/model/selectors/articlesPageSelectors';
import { Input } from 'shared/ui/Input/Input';
import { ArticlesSortSelector } from 'entities/Article/ui/ArticlesSortSelector/ArticlesSortSelector';
import { SortOrder } from 'shared/types';
import { batch } from 'react-redux';
import { fetchArticlesList } from 'pages/Articles/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ARTICLE_TYPE } from 'entities/Article/model/types/IArticle';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';

interface IProps {
    className?: string
}

export const ArticlesFilters: FC<IProps> = (props) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation('articles');

    const {
        pageView,
        order,
        sort,
        search,
        type,
    } = useAppSelector(getArticlesFiltersSelector);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ARTICLE_VIEW) => {
        batch(() => {
            dispatch(articlesPageActions.setView(view));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        });
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        batch(() => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        });
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ARTICLE_SORT_FIELD) => {
        batch(() => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        });
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        batch(() => {
            dispatch(articlesPageActions.setSearch(newSearch));
            dispatch(articlesPageActions.setPage(1));
            debounceFetchData();
        });
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((tab: TabItem) => {
        batch(() => {
            dispatch(articlesPageActions.setType(tab.value as ARTICLE_TYPE));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        });
    }, [dispatch, fetchData]);

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ARTICLE_TYPE.ALL,
            content: t('label.filter_all'),
        },
        {
            value: ARTICLE_TYPE.IT,
            content: t('label.filter_it'),
        },
        {
            value: ARTICLE_TYPE.ECONOMICS,
            content: t('label.filter_economics'),
        },
        {
            value: ARTICLE_TYPE.SCIENCE,
            content: t('label.filter_science'),
        },
    ], [t]);

    return (
        <>
            <div className={classNames(cls.root, {}, [className])}>
                <div className={cls.wrap}>
                    <Input size="medium" onChange={onChangeSearch} value={search} />
                    <ArticlesSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
                </div>

                <ArticleViewSelector view={pageView} onViewClick={onChangeView} />

            </div>
            <Tabs className={cls.tabs} tabs={typeTabs} value={type} onTabClick={onChangeType} />
        </>
    );
};
