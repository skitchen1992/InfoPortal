import { memo } from 'react';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getCommentsStateSelector } from 'entities/Comment/model/selectors/comments';
import { Typography } from 'shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

export const CommentList = memo(() => {
    const {
        isLoading, hasData, error, comments,
    } = useAppSelector(getCommentsStateSelector);

    const { t } = useTranslation();

    return (
        <div className={cls.root}>
            <Typography variant="h5">
                {t('label.comments')}
            </Typography>
            <NoDataContainer isLoading={isLoading} hasData={hasData} error={error} loaderSize="large">
                <div className={cls.commentsList}>
                    {comments?.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            comment={comment}
                        />
                    ))}
                </div>
            </NoDataContainer>
        </div>
    );
});
