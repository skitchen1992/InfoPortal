import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';

export default {
    title: 'entities/Currency',
    component: Currency,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Currency>;

const Template: ComponentStory<typeof Currency> = (args) => <Currency {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 'small',
    value: 'uae',
};

Primary.decorators = [ThemeDecorator(THEME.DARK)];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    size: 'small',
    value: 'uae',
};

PrimaryLight.decorators = [ThemeDecorator(THEME.LIGHT)];
