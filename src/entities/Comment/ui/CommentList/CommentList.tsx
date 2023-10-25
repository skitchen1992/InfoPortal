import { memo } from 'react';
import { NoDataContainer } from 'shared/ui/NoDataContainer/NoDataContainer';
import { Typography } from 'shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { IComment } from 'entities/Comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface IProps{
    isLoading: boolean,
    hasData: boolean,
    error?: Nullable<string>,
    comments: IComment[]
}

export const CommentList = memo((props: IProps) => {
    const {
        isLoading, hasData, error, comments,
    } = props;

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
