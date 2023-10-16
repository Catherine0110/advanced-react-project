import { ComponentStory, ComponentMeta } from '@storybook/react'

import CommentList from './CommentList'

export default {
  title: 'entities/Comments/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    { id: '1', text: 'test', user: { id: '1', username: 'USER' } },
    { id: '2', text: 'test2', user: { id: '2', username: 'USER2' } },
  ],
}
export const Load = Template.bind({})
Load.args = {
  comments: [],
  isLoading: true,
}
