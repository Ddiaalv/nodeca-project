---
to: <%= path %>/<%= name %>/<%= name %>.tsx
---
import { FC } from 'react'
import { <%= name %>Styled } from './<%= name %>.styles'
import <%= name %>Props from './<%= name %>.types'

export const <%= name %>: FC<<%= name %>Props> = () => <<%= name %>Styled> Hello from <%= name %>! </<%= name %>Styled>

<%= name %>.displayName = '<%= name %>'
