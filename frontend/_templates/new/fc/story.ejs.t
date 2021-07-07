---
to: <%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import { Meta, Story } from '@storybook/react/types-6-0'
import { <%= name %>Types } from './<%= name %>.types'
import { <%= name %> } from './<%= name %>'

export default {
  title: 'Template/<%= name %>',
  component: <%= name %>,
} as Meta

const Template: Story<<%= name %>Types> = () => <<%= name %> />

export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {}
