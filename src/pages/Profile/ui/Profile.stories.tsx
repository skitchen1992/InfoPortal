import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import Profile from 'pages/Profile/ui/Profile';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/ProfileAsync',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Light = Template.bind({});
Light.args = {};

Light.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})];
