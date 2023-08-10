import { lazy } from 'react';

export const ArticleDetailsAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetails')), 500);
}));
