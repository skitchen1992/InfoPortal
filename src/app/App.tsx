import React, { type FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';
import { Header } from 'widgets/Header';
import { SideBar } from 'widgets/SideBar';
import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { userActions } from 'entities/User/model/slice/userSlice';

const App: FC = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthUser());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Header />
                <div className={classNames('content-page')}>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
