import {FC} from 'react';
import "./styles/index.scss"
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Header} from "widgets/Header";

const App: FC = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Header/>
            <AppRouter/>
        </div>
    );
};

export default App;
