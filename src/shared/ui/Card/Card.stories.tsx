/* eslint-disable i18next/no-literal-string */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Text from 'shared/ui/Text/Text'
import Card from './Card'

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <Text title="Test" text="text" />,
}

export const Dark = Template.bind({})
Dark.args = {
  children: <Text title="Test" text="text" />,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
