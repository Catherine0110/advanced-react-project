import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Loader from './Loader'

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {
  children: 'Text',
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
