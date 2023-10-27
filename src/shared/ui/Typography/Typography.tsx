import { FC, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Typography.module.scss';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
export type Color = 'error' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'inherit';

const variantClasses: Record<Variant, string> = {
    h1: cls.h1,
    h2: cls.h2,
    h3: cls.h3,
    h4: cls.h4,
    h5: cls.h5,
    h6: cls.h6,
    body1: cls.body1,
    body2: cls.body2,
};

const colorClasses: Record<Color, string> = {
    error: cls.error,
    primary: cls.primary,
    secondary: cls.secondary,
    textPrimary: cls.textPrimary,
    textSecondary: cls.textSecondary,
    inherit: cls.inherit,
};

interface IProps {
    variant?: Variant
    children: string | ReactNode
    fontWeight?: boolean
    color?: Color
    className?: string
}

export const Typography: FC<IProps> = (props) => {
    const {
        children, variant = 'body1', fontWeight, color, className,
    } = props;

    const Tag = variant === 'body1' || variant === 'body2' ? 'p' : variant;
    const classes = [
        className,
        variantClasses[variant],
        color && colorClasses[color],
    ];

    const mods: Mods = {
        [cls.fontWeight]: fontWeight,
    };

    return (
        <Tag className={classNames(cls.root, mods, classes)}>
            {children}
        </Tag>
    );
};
