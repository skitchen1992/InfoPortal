import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { useAppSelector } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { articleDetailsHeader } from 'pages/ArticleDetailsPage/model/selectors/detailsHeader';
import cls from './ArticleDetailsHeader.module.scss';

interface IProps {
    className?: string
}

export const ArticleDetailsHeader: FC<IProps> = (props) => {
    const { className } = props;

    const navigate = useNavigate();
    const { t } = useTranslation('article-details');

    const { isEdit, articleId } = useAppSelector(articleDetailsHeader);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}/${articleId}/edit`);
    }, [navigate, articleId]);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Button onClick={onBackToList}>
                {t('label.back_to_articles')}
            </Button>
            { isEdit && (
                <Button variant="outline" onClick={onEditArticle}>
                    {t('label.edit')}
                </Button>
            ) }
        </div>
    );
};
