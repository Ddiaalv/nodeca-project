import { Meta, Story } from '@storybook/react/types-6-0'
import { Header } from './Header'

export default {
  title: 'Template/Header',
  component: Header,
} as Meta

const Template: Story = () => <Header />

export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {}
