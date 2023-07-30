import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';

export default {
    title: 'shared/Country',
    component: Country,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Country>;

const Template: ComponentStory<typeof Country> = (args) => <Country {...args} />;

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
