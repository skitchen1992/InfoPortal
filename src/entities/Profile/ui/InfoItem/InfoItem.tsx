import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import { Input } from 'shared/ui/Input/Input';
import { IInfo } from 'pages/Profile/selector/selector';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import cls from './InfoItem.module.scss';

interface IProps {
    onChangeFormField: (value: string, name?: string) => void
    className?: string
    item: IInfo
    readOnly?: boolean
}

export const InfoItem = memo((props: IProps) => {
    const {
        onChangeFormField,
        className, item, readOnly,
    } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Typography variant="body1">
                {t(item.label)}
            </Typography>
            {item.field === 'currency' && (
                <Currency
                    size="small"
                    name={item.field}
                    value={item.value}
                    onChange={onChangeFormField}
                    readOnly={readOnly}
                />
            )}

            {item.field === 'country' && (
                <Country
                    size="small"
                    name={item.field}
                    value={item.value}
                    onChange={onChangeFormField}
                    readOnly={readOnly}
                />
            )}

            {item.field !== 'country' && item.field !== 'currency' && (
                <Input
                    size="small"
                    name={item.field}
                    onChange={onChangeFormField}
                    value={item.value}
                    readOnly={readOnly}
                />
            )}

        </div>
    );
});
