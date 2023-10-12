import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './ArticleTextBlockComponent.module.scss';
import { IArticleTextBlock } from '../../model/types/IArticle';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: IArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            <Typography>
                {block.title}
            </Typography>
            {block.paragraphs.map((paragraph, index) => (
                <Typography key={paragraph}>
                    {paragraph}
                </Typography>
            ))}
        </div>
    );
});
