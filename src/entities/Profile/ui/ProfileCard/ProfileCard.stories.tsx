import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { COUNTRY, CURRENCY } from 'shared/consts/consts';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';

const ProfileCardMockData = {
    profile: {
        first_name: 'Niki',
        last_name: 'Lav',
        age: '123',
        city: 'Dubai',
        country: COUNTRY.USA,
        currency: CURRENCY.EUR,
        user_name: 'admin',
        avatar: 'https://memepedia.ru/wp-content/uploads/2020/12/udivlennyj-bagz-banni-mem-shablon.jpg',
    },
    infoList: [
        { label: 'label.first_name', value: 'label.first_name', field: 'first_name' },
        { label: 'label.last_name', value: 'label.last_name', field: 'last_name' },
        { label: 'label.age', value: 'label.age', field: 'age' },
        { label: 'label.city', value: 'label.city', field: 'city' },
        { label: 'label.user_name', value: 'label.user_name', field: 'user_name' },
        { label: 'label.avatar', value: 'label.avatar', field: 'avatar' },
        { label: 'label.country', value: 'label.country', field: 'country' },
        { label: 'label.currency', value: 'label.currency', field: 'currency' },
    ],
};

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = ProfileCardMockData;

Primary.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    user: { authData: { } },
})];

export const PrimaryLight = Template.bind({});
PrimaryLight.args = ProfileCardMockData;

PrimaryLight.decorators = [ThemeDecorator(THEME.LIGHT), StoreDecorator({
    user: { authData: { } },
})];

export const PrimaryHasError = Template.bind({});
PrimaryHasError.args = { ...ProfileCardMockData, hasError: true };

PrimaryHasError.decorators = [ThemeDecorator(THEME.DARK), StoreDecorator({
    user: { authData: { } },
})];
