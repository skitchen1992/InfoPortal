import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};

Small.decorators = [ThemeDecorator(THEME.DARK)];

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
};

Medium.decorators = [ThemeDecorator(THEME.DARK)];

export const Large = Template.bind({});
Large.args = {
    size: 'large',
};

Large.decorators = [ThemeDecorator(THEME.LIGHT)];
