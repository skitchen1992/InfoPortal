import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Typography } from 'shared/ui/Typography/Typography';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
import { IComment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <AppLink to={`${RoutePath.profile}/${comment.user.id}`} className={cls.header}>
                <Avatar alt="Avatar" src={comment.user.avatar} />
                <Typography variant="h6">
                    {comment.user.userName}
                </Typography>
            </AppLink>
            <Typography>
                {comment.text}
            </Typography>
        </div>
    );
});
