import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'app/providers/Router/routeConfig/routeConfig';
import { FC } from 'react';

interface IProps {
    children: JSX.Element;
}

const RequireAuth: FC<IProps> = (props) => {
    const { children } = props;

    const auth = useAppSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;
