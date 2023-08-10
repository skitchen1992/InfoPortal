import { lazy } from 'react';

export const ArticlesAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./Articles')), 500);
}));
