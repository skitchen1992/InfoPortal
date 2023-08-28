import { FC, memo } from 'react';
import { ArticleDetailsRoot } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { IArticleParams } from 'app/providers/Router/routeConfig/routeConfig';

const ArticleDetails: FC = () => {
    const { articleId } = useParams<IArticleParams>();

    return (
        <ArticleDetailsRoot id={articleId} />
    );
};

export default memo(ArticleDetails);
