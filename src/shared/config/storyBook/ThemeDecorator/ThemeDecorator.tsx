import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { THEME, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>

);
