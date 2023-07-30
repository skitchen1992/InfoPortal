import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'app/providers/Router/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';

const AppRouter: FC = () => {
    const isAuth = useAppSelector(getUserAuthData);

    const filteredRoutes = Object.values(routeConfig).filter(({ authOnly }) => {
        if (authOnly) {
            return isAuth;
        }

        return true;
    });

    return (
        <Routes>
            {filteredRoutes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
