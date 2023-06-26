import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { Header } from './Header';

export default {
    title: 'widgets/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {
};

Light.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})];

export const LightAuth = Template.bind({});
LightAuth.args = {
};

LightAuth.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({
    user: { authData: { } },
})];

export const DarkAuth = Template.bind({});
DarkAuth.args = {
};

DarkAuth.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    user: { authData: { } },

})];
