import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha',
};

Dark.decorators = [ThemeDecorator(THEME.DARK)];
