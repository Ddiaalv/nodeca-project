import { Meta, Story } from '@storybook/react/types-6-0'
import { Footer } from './Footer'

export default {
  title: 'Template/Footer',
  component: Footer,
} as Meta

const Template: Story = () => <Footer />

export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {}
