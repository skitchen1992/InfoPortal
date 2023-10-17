import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { IArticle, ARTICLE_VIEW } from '../../model/types/IArticle';

interface ArticleListProps {
    articles: IArticle[]
    view?: ARTICLE_VIEW;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const { articles, view = ARTICLE_VIEW.SMALL } = props;

    const renderArticle = (article: IArticle) => (
        <ArticleListItem
            article={article}
            view={view}
            key={article.id}
        />
    );

    return (
        <div className={classNames(cls.root, {}, [])}>
            {articles?.map(renderArticle)}
        </div>
    );
});
