import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    login: { userName: 'test', password: 'test' },
})];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {};

PrimaryLight.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({
    login: { userName: 'test', password: 'test' },
})];

export const PrimaryLightError = Template.bind({});
PrimaryLightError.args = {};

PrimaryLightError.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({
    login: { userName: 'test', password: 'test', error: 'WRONG_PASSWORD' },
})];

export const PrimaryLightLoading = Template.bind({});
PrimaryLightLoading.args = {};

PrimaryLightLoading.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({
    login: { userName: 'test', password: 'test', isLoading: true },
})];
