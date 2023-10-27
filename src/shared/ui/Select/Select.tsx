import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface IProps <T extends string> {
    onChange?: (value: T, name?: string) => void;
    size?: 'small' | 'large' | 'medium'
    options?: IOption<T, string>[];
    className?: string
    value?: T;
    name?: string;
    fullWidth?: boolean;
    disabled?: boolean
}

export const Select = <T extends string> (props: IProps<T>) => {
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
        onChange?.(event.target.value as T, name);
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
