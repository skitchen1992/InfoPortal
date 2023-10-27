import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useLayoutEffect, useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/hooks';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getSavedScrollByPath, saveScrollActions } from 'features/SaveScroll';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useAppSelector((state) => getSavedScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useLayoutEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(saveScrollActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.root, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    );
});
