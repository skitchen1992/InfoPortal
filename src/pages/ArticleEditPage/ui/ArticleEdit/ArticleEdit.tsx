import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { IArticleParams } from 'app/providers/Router/routeConfig/routeConfig';
import cls from './ArticleEdit.module.scss';

interface IProps {
    className?: string
}

const ArticleEdit: FC<IProps> = (props) => {
    const { className } = props;
    const { articleId } = useParams<IArticleParams>();

    const { t } = useTranslation('article-edit');
    const isEdit = Boolean(articleId);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {isEdit ? `Edit ID${articleId}` : 'Create'}
        </div>
    );
};

export default ArticleEdit;
