import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import ProfileCard from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  data: {
    first: 'Name',
    lastname: 'Lastname',
    age: '22',
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://sh1-polyarnyj-r47.gosweb.gosuslugi.ru/netcat_files/11/143/gray_woman_placeholder_18.png',
  },
}

export const Error = Template.bind({})
Error.args = {
  error: 'error',
}

export const Load = Template.bind({})
Load.args = {
  loading: true,
}
