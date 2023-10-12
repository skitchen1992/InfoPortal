import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { IArticle, ARTICLE_VIEW } from '../../model/types/IArticle';

interface ArticleListProps {
    className?: string;
    articles: IArticle[]
    isLoading?: boolean;
    view?: ARTICLE_VIEW;
}

const getSkeletons = (view: ARTICLE_VIEW) => new Array(view === ARTICLE_VIEW.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ARTICLE_VIEW.SMALL,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.map(renderArticle)}
        </div>
    );
});
