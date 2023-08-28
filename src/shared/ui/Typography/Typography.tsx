import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Typography.module.scss';

const enum VARIANT {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    BODY1 = 'body1',
    BODY2 = 'body2',
}

const enum COLOR {
    ERROR = 'error',
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TEXT_PRIMARY = 'textPrimary',
    TEXT_SECONDARY = 'textSecondary',
    INHERIT = 'inherit',
}

interface IProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
    children?: string | ReactNode
    fontWeight?: boolean
    color?: 'error' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'inherit'
    className?: string
}

export const Typography: FC<IProps> = (props) => {
    const {
        children, variant = 'body1', fontWeight, color, className,
    } = props;

    return (
        <div className={classNames(cls.root, {
            [cls.h1]: variant === VARIANT.H1,
            [cls.h2]: variant === VARIANT.H2,
            [cls.h3]: variant === VARIANT.H3,
            [cls.h4]: variant === VARIANT.H4,
            [cls.h5]: variant === VARIANT.H5,
            [cls.h6]: variant === VARIANT.H6,
            [cls.body1]: variant === VARIANT.BODY1,
            [cls.body2]: variant === VARIANT.BODY2,
            [cls.fontWeight]: fontWeight,
            [cls.error]: color === COLOR.ERROR,
            [cls.inherit]: color === COLOR.INHERIT,
        }, [className])}
        >
            {children}
        </div>
    );
};
