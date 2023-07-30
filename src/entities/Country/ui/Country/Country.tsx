import { FC } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { COUNTRY } from 'shared/consts/consts';

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

    return (
        <Select
            size={size}
            name={name}
            value={value}
            options={options}
            disabled={readOnly}
            onChange={onChange}
        />
    );
};
