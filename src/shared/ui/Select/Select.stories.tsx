import { ComponentStory, ComponentMeta } from '@storybook/react'

import Select from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Выбрать пункт',
  options: [{ value: 'opt1', content: 'opt1' }, { value: 'opt2', content: 'opt2' }, { value: 'opt3', content: 'opt3' }],
}
