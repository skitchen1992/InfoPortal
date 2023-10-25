import { FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { ARTICLE_SORT_FIELD } from 'entities/Article/model/types/IArticle';
import { SortOrder } from 'shared/types';
import cls from './ArticlesSortSelector.module.scss';

interface IProps {
    className?: string
    sort: ARTICLE_SORT_FIELD,
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder)=>void
    onChangeSort: (newSort: ARTICLE_SORT_FIELD)=>void
}

export const ArticlesSortSelector: FC<IProps> = (props) => {
    const {
        className, sort, order, onChangeOrder, onChangeSort,
    } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo<IOption<SortOrder, string>[]>(() => ([
        {
            label: t('label.ascending'),
            value: 'asc',
        },
        {
            label: t('label.descending'),
            value: 'desk',
        },
    ]), [t]);

    const sortFieldOptions = useMemo<IOption<ARTICLE_SORT_FIELD, string>[]>(() => ([
        {
            label: t('label.date_created'),
            value: ARTICLE_SORT_FIELD.CREATED,
        },
        {
            label: t('label.title'),
            value: ARTICLE_SORT_FIELD.TITLE,
        },
        {
            label: t('label.views'),
            value: ARTICLE_SORT_FIELD.VIEWS,
        },
    ]), [t]);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Select value={sort} onChange={onChangeSort} options={sortFieldOptions} size="medium" />
            <Select value={order} onChange={onChangeOrder} options={orderOptions} size="medium" />
        </div>
    );
};
