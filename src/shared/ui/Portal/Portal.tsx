import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
    children: ReactNode,
    element?: HTMLElement
}

export const Portal: FC<IProps> = (props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
