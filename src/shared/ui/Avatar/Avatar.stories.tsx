import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://sh1-polyarnyj-r47.gosweb.gosuslugi.ru/netcat_files/11/143/gray_woman_placeholder_18.png',
  size: 150,
}
