import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
                <Typography>
                    {block.title}
                </Typography>
            )}
        </div>
    );
});
