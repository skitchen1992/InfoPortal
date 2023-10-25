import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { IArticle, ARTICLE_VIEW } from '../../model/types/IArticle';

interface ArticleListProps {
    className?: string
    articles: IArticle[]
    view?: ARTICLE_VIEW;
    target?: HTMLAttributeAnchorTarget
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        articles, view = ARTICLE_VIEW.SMALL, className, target,
    } = props;

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
            target={target}
        />
    );

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {articles?.map(renderArticle)}
        </div>
    );
});
