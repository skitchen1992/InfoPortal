import {FC, Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {FirstPage} from "pages/First";
import {SecondPage} from "pages/Second";

const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>First</Link>
            <Link to={"/second"}>Second</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={"/"} element={<FirstPage/>}/>
                    <Route path={"/second"} element={<SecondPage/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;
