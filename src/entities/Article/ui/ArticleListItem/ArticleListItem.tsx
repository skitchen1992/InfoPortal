import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { Eye } from 'phosphor-react';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './ArticleListItem.module.scss';
import {
    IArticle, IArticleTextBlock, ARTICLE_VIEW, ARTICLE_BLOCK_TYPE,
} from '../../model/types/IArticle';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ARTICLE_VIEW;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}/${article.id}`);
    }, [article.id, navigate]);

    const types = (
        <Typography className={cls.types}>
            {article.type.join(', ')}
        </Typography>
    );
    const views = (
        <>
            <Typography>
                {String(article.views)}
            </Typography>
            <Eye size={16} />
        </>
    );

    if (view === ARTICLE_VIEW.BIG) {
        const textBlock = article.blocks?.find(
            (block) => block.type === ARTICLE_BLOCK_TYPE.TEXT,
        ) as IArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user?.avatar} alt="Avatar" />
                        <Typography>
                            {article.user.userName}
                        </Typography>
                        <Typography>
                            {article.createdAt}
                        </Typography>
                    </div>
                    <Typography variant="h6">
                        {article.title}
                    </Typography>
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle}>
                            {t('label.read_more')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWraxpper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Typography variant="body1">
                        {article.createdAt}
                    </Typography>
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Typography variant="h6">
                    {article.title}
                </Typography>
            </Card>
        </div>
    );
});
