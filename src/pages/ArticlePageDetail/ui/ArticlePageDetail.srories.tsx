import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import ArticlePageDetail from './ArticlePageDetail'

export default {
  title: 'shared/ArticlePageDetail',
  component: ArticlePageDetail,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlePageDetail>

const Template: ComponentStory<typeof ArticlePageDetail> = (args) => <ArticlePageDetail {...args} />

export const Primary = Template.bind({})
Primary.args = {
}

export const Dark = Template.bind({})
Dark.args = {
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
