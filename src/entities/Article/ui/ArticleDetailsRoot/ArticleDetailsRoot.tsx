import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { ReducersList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { Typography } from 'shared/ui/Typography/Typography';
import { CalendarBlank, Eye } from 'phosphor-react';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { ArticleDetailsSkeleton } from '../ArticleDetailsSkeleton/ArticleDetailsSkeleton';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetailsRoot.module.scss';
import {
    articleDetailsSelector,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ARTICLE_BLOCK_TYPE } from '../../model/types/article';

interface IProps {
    id?: string;
}

const initialReducers : ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetailsRoot = memo((props: IProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();

    useDynamicModuleLoad({ reducers: initialReducers });

    const {
        data,
        isLoading,
        error,
        hasData,
    } = useSelector(articleDetailsSelector);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ARTICLE_BLOCK_TYPE.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ARTICLE_BLOCK_TYPE.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ARTICLE_BLOCK_TYPE.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id!));
    });

    if (!id) {
        return null;
    }

    return (
        <NoDataContainer
            isLoading={isLoading}
            hasData={hasData}
            loader={<ArticleDetailsSkeleton />}
            error={error}
            loaderSize="large"
        >
            <div className={classNames(cls.root, {}, [])}>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        alt="Avatar"
                        size={200}
                        src={data?.img}
                        className={cls.avatar}
                    />
                </div>
                <Typography variant="h1" className={cls.title}>
                    {data?.title}
                </Typography>
                <Typography variant="h3" className={cls.title}>
                    {data?.subtitle}
                </Typography>
                <div className={cls.articleInfo}>
                    <Eye size={16} />
                    <Typography>
                        {data?.views}
                    </Typography>
                </div>
                <div className={cls.articleInfo}>
                    <CalendarBlank size={16} />
                    <Typography>
                        {data?.createdAt}
                    </Typography>
                </div>
                {data?.blocks.map(renderBlock)}
            </div>
        </NoDataContainer>
    );
});
