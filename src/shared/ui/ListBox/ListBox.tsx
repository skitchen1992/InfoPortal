import { FC, Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { CaretDown, CaretUp, Check } from 'phosphor-react';
import { DropdownDirection } from 'shared/types/ui';
import { HStack } from '../Stack';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    label: ReactNode;
    disabled?: boolean;
}

type Size = 'small' | 'large' | 'medium'

interface ListBoxProps {
    options?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
    size?: Size
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const ListBox: FC<ListBoxProps> = (props) => {
    const {
        className,
        options,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
        size = 'small',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    const triggerMods: Mods = {
        [cls.small]: size === 'small',
        [cls.medium]: size === 'medium',
        [cls.large]: size === 'large',
        [cls.readonly]: readonly,
    };

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.root, {}, [className])}
                value={value}
                onChange={onChange}
            >
                {({ open }) => (
                    <>
                        <HListBox.Button className={classNames(cls.trigger, triggerMods, [])}>
                            {value ?? defaultValue}
                            <span className={cls.arrow}>
                                {open ? <CaretUp size={16} /> : <CaretDown size={16} />}
                            </span>
                        </HListBox.Button>

                        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                            {options?.map((item) => (
                                <HListBox.Option
                                    key={item.value}
                                    value={item.value}
                                    disabled={item.disabled}
                                    as={Fragment}
                                >
                                    {({ active, selected }) => (
                                        <li
                                            className={classNames(
                                                cls.item,
                                                {
                                                    [cls.active]: active,
                                                    [cls.disabled]: item.disabled,
                                                    [cls.selected]: selected,
                                                },
                                            )}
                                        >
                                            <HStack gap="4">
                                                {item.label}
                                                {selected && <Check size={16} />}
                                            </HStack>
                                        </li>
                                    )}
                                </HListBox.Option>
                            ))}
                        </HListBox.Options>
                    </>
                )}

            </HListBox>
        </HStack>
    );
};
