import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AppLink, { AppLinkTheme } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
}

export const DarkSecondary = Template.bind({})
DarkSecondary.args = {
  children: 'Text',
  theme: AppLinkTheme.PRIMARY,
}
DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkPrimary = Template.bind({})
DarkPrimary.args = {
  children: 'Text',
  theme: AppLinkTheme.SECONDARY,
}
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)]

export const InvertSecondary = Template.bind({})
InvertSecondary.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED_SECONDARY,
}

export const InvertPrimary = Template.bind({})
InvertPrimary.args = {
  children: 'Text',
  theme: AppLinkTheme.INVERTED_PRIMARY,
}
