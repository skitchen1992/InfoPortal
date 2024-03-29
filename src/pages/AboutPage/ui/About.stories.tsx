import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import About from 'pages/AboutPage/ui/About';

export default {
    title: 'pages/AboutAsync',
    component: About,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Light = Template.bind({});
Light.args = {
};

Light.decorators = [ThemeDecorator(THEME.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(THEME.DARK)];
