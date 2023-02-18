import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.LIGHT;

const ThemeProvider: FC = (props) => {
    const { children } = props;

    const [theme, setTheme] = useState<THEME>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
