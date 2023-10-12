import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from 'shared/ui/Typography/Typography';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children:
    <>
        <Typography variant="h6">
            test
        </Typography>
        <Typography>
            text text
        </Typography>
    </>,

};
