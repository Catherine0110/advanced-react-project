import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import ProfilePage from './ProfilePage'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      first: 'Name',
      lastname: 'Lastname',
      age: '22',
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: 'https://sh1-polyarnyj-r47.gosweb.gosuslugi.ru/netcat_files/11/143/gray_woman_placeholder_18.png',
    },
  },
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      first: 'Name',
      lastname: 'Lastname',
      age: '22',
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
      avatar: 'https://sh1-polyarnyj-r47.gosweb.gosuslugi.ru/netcat_files/11/143/gray_woman_placeholder_18.png',
    },
  },
})]
