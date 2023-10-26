import { lazy } from 'react';

export const ArticleEditAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleEdit')), 500);
}));
