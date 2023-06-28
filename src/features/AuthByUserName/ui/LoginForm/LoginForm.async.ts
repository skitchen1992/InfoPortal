import { lazy, FC } from 'react';
import { ILoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const LoginFormAsync = lazy<FC<ILoginForm>>(() => new Promise((resolve) => {
    resolve(import('./LoginForm'));
}));
