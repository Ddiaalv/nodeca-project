import { Meta, Story } from '@storybook/react/types-6-0'
import NavMenuTypes from './NavMenu.types'
import { NavMenu } from './NavMenu'

export default {
  title: 'Template/NavMenu',
  component: NavMenu,
} as Meta

const Template: Story<NavMenuTypes> = () => <NavMenu />

export const DefaultTemplate = Template.bind({})
DefaultTemplate.args = {}
