import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
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
