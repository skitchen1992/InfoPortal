import { FC } from 'react';
import { COUNTRY } from 'shared/consts/consts';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const options = Object.entries(COUNTRY).map(([value, label]) => ({ value, label }));

interface IProps {
    name: string
    value?: string;
    size?: 'small' | 'large' | 'medium'
    onChange?: (event: string, name: string | undefined) => void;
    readOnly?: boolean
}

export const Country: FC<IProps> = (props) => {
    const {
        onChange,
        value,
        size = 'small',
        readOnly,
        name,
    } = props;

    const onChangeHandler = (value: string) => {
        onChange?.(value, name);
    };
    return (
        <ListBox
            size={size}
            value={value}
            options={options}
            onChange={onChangeHandler}
            readonly={readOnly}
        />
    );
};
