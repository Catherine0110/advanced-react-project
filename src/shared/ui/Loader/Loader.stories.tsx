import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Loader, { LoaderSize } from './Loader'

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

export const SizeS = Template.bind({})
SizeS.args = {
  children: 'Text',
  size: LoaderSize.S,
}
export const SizeM = Template.bind({})
SizeM.args = {
  children: 'Text',
  size: LoaderSize.M,
}
export const SizeL = Template.bind({})
SizeL.args = {
  children: 'Text',
  size: LoaderSize.L,
}
