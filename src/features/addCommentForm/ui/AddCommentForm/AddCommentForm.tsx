import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { ReducersList, useDynamicModuleLoad } from 'shared/hooks/useDynamicModuleLoad/useDynamicModuleLoad';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import selector from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        text, error,
    } = useAppSelector(selector);

    useDynamicModuleLoad({ reducers: initialReducers });

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Input
                fullWidth
                size="medium"
                className={cls.input}
                placeholder={t('label.enter_comment_text')}
                value={text}
                onChange={onCommentTextChange}
            />
            <Button
                size="medium"
                onClick={onSendHandler}
            >
                {t('label.sent')}
            </Button>
        </div>
    );
});

export default AddCommentForm;
