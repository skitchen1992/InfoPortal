import { ChangeEvent, FC, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface IProps {
    onChange?: (event: string, name: string | undefined) => void;
    size?: 'small' | 'large' | 'medium'
    options?: IOption<string, string>[];
    className?: string
    value?: string;
    name?: string;
    fullWidth?: boolean;
    disabled?: boolean
}

export const Select: FC<IProps> = (props) => {
    const {
        className,
        options = [],
        value,
        onChange,
        name,
        fullWidth,
        size = 'large',
        disabled,
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth,
        [cls.small]: size === 'small',
        [cls.medium]: size === 'medium',
        [cls.large]: size === 'large',
        [cls.disabled]: disabled,
    };

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event.target.value, name);
    };

    const optionsList = useMemo(() => options.map((option) => (
        <option
            key={option.value}
            className={cls.option}
            value={option.value}
        >
            {option.label}
        </option>
    )), [options]);

    return (
        <select disabled={disabled} className={classNames(cls.root, mods, [className])} value={value} onChange={onChangeHandler}>
            {optionsList}
        </select>
    );
};
