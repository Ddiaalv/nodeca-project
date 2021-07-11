import { Meta, Story } from '@storybook/react/types-6-0'
import { ListTypes } from './List.types'
import { List } from './List'

export default {
  title: 'Template/List',
  component: List,
} as Meta

const Template: Story<ListTypes> = () => <List />

export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {}
