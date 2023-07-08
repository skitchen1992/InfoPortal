import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { ReactReduxContext } from 'react-redux';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { SideBar } from './SideBar';

export default {
    title: 'widgets/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {
};

Light.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({})];
