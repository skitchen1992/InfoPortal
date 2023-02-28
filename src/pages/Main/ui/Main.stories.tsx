import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { MainAsync } from './Main.async';

export default {
    title: 'pages/MainAsync',
    component: MainAsync,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainAsync>;

const Template: ComponentStory<typeof MainAsync> = (args) => <MainAsync {...args} />;

export const Light = Template.bind({});
Light.args = {
};

Light.decorators = [ThemeDecorator(THEME.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(THEME.DARK)];
