import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import Articles from './Articles';

export default {
    title: 'shared/Articles',
    component: Articles,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [ThemeDecorator(THEME.DARK)];
