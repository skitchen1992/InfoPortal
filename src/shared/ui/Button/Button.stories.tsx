import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Click',
};

Primary.decorators = [ThemeDecorator(THEME.DARK)];

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Click',
};

Small.decorators = [ThemeDecorator(THEME.DARK)];

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    children: 'Click',
};

Medium.decorators = [ThemeDecorator(THEME.DARK)];

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Click',
};

Large.decorators = [ThemeDecorator(THEME.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    size: 'large',
    children: 'Click',
    disabled: true,
};

Disabled.decorators = [ThemeDecorator(THEME.DARK)];
