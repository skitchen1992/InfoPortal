import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { ArticlesSortSelector } from './ArticlesSortSelector';

export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticlesSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesSortSelector>;

const Template: ComponentStory<typeof ArticlesSortSelector> = (args) => <ArticlesSortSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [ThemeDecorator(THEME.DARK)];
