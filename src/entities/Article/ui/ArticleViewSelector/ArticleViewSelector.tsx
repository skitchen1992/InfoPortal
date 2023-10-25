import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { GridFour, ListBullets } from 'phosphor-react';
import { IconButton } from 'shared/ui/IconButton/IconButton';
import { ARTICLE_VIEW } from '../../model/types/IArticle';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ARTICLE_VIEW,
    onViewClick?: (view: ARTICLE_VIEW) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const viewTypes = [
        {
            view: ARTICLE_VIEW.SMALL,
            icon: <GridFour
                size={12}
                weight="fill"
                className={classNames(cls.icon, { [cls.notSelected]: ARTICLE_VIEW.SMALL !== view })}
            />,
        },
        {
            view: ARTICLE_VIEW.BIG,
            icon: <ListBullets
                size={12}
                weight="fill"
                className={classNames(cls.icon, { [cls.notSelected]: ARTICLE_VIEW.BIG !== view })}
            />,
        },
    ];
    const onClick = (newView: ARTICLE_VIEW) => () => {
        if (newView !== view) {
            onViewClick?.(newView);
        }
    };

    return (
        <div className={classNames(cls.root, {}, [className])}>
            {viewTypes.map((viewType) => (
                <IconButton
                    className={viewType.view === view ? cls.iconBtn : undefined}
                    key={viewType.view}
                    onClick={onClick(viewType.view)}
                >
                    {viewType.icon}
                </IconButton>
            ))}
        </div>
    );
});
