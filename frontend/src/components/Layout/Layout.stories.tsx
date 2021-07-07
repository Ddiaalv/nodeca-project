import { Meta, Story } from '@storybook/react/types-6-0'
import Layout from './Layout'

export default {
  title: 'Template/Layout',
  component: Layout,
} as Meta

const Template: Story = () => <Layout />

export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {}
