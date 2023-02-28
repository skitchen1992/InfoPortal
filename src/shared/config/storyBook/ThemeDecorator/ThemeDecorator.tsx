import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { THEME } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
