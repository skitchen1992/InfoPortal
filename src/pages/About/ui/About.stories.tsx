import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { AboutAsync } from './About.async';

export default {
    title: 'pages/AboutAsync',
    component: AboutAsync,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutAsync>;

const Template: ComponentStory<typeof AboutAsync> = (args) => <AboutAsync {...args} />;

export const Light = Template.bind({});
Light.args = {
};

Light.decorators = [ThemeDecorator(THEME.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(THEME.DARK)];
