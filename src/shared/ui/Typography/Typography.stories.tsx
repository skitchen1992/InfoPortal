import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Typography } from 'shared/ui/Typography/Typography';

export default {
    title: 'shared/Typography',
    component: Typography,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const H1 = Template.bind({});
H1.args = {
    children: 'Text',
    variant: 'h1',
};

H1.decorators = [ThemeDecorator(THEME.DARK)];

export const H2 = Template.bind({});
H2.args = {
    children: 'Text',
    variant: 'h2',
};

H2.decorators = [ThemeDecorator(THEME.DARK)];

export const H3 = Template.bind({});
H3.args = {
    children: 'Text',
    variant: 'h3',
};

H3.decorators = [ThemeDecorator(THEME.DARK)];

export const H4 = Template.bind({});

H4.args = {
    children: 'Text',
    variant: 'h4',
};

H4.decorators = [ThemeDecorator(THEME.DARK)];

export const H5 = Template.bind({});
H5.args = {
    children: 'Text',
    variant: 'h5',
};

H5.decorators = [ThemeDecorator(THEME.DARK)];

export const H6 = Template.bind({});

H6.args = {
    children: 'Text',
    variant: 'h6',
};

H6.decorators = [ThemeDecorator(THEME.DARK)];

export const body1 = Template.bind({});
body1.args = {
    children: 'Text',
    variant: 'body1',
};

body1.decorators = [ThemeDecorator(THEME.DARK)];

export const body2 = Template.bind({});
body2.args = {
    children: 'Text',
    variant: 'body2',
};

body2.decorators = [ThemeDecorator(THEME.DARK)];
