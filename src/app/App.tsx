import {FC} from 'react';
import "./styles/index.scss"
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {AppRouter} from "app/providers/router";

const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={RoutePath.main}>Main</Link>
            <Link to={RoutePath.about}>ABOUT</Link>
            <AppRouter/>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;
