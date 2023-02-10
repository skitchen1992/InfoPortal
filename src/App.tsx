import {FC, Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {FirstAsync} from "./pages/First/First.async.";
import {SecondAsync} from "./pages/Second/Second.async.";
import {useTheme} from "./styles/theme/useTheme";
import {classNames} from "./helpers/classNames";

const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to={"/"}>First</Link>
            <Link to={"/second"}>Second</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={"/"} element={<FirstAsync/>}/>
                    <Route path={"/second"} element={<SecondAsync/>}/>
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>Change theme</button>
        </div>
    );
};

export default App;
