import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import Skeleton from './Skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: '100px',
  height: '50px',
}

export const Dark = Template.bind({})
Dark.args = {
  width: '100px',
  height: '50px',
  border: '50%',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
