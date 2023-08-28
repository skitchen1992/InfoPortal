import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Copy } from 'phosphor-react';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.root, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn}>
                <Copy />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
