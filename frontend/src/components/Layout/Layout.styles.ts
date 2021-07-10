import styled from '@emotion/styled'
import { styleGuide } from '../../../utils/styleGuide'

const desktopNotebook = `
  margin: 0 auto;
  width: 70%;
`

export const Notebook = styled.div`
  position: relative;
  display: grid;
  background: url('/bg-notebook.jpg');
  padding: 10px;
  margin-top: 50px;
  border-radius: 10px;
  @media (min-width: ${styleGuide.device.md}) {
    ${desktopNotebook}
    margin-top: 50px;
  }
`

const sheet = `
content: '';
position: absolute;
box-shadow: 2px 2px 2px -2px rgb(0 0 0 / 30%);
border-radius: 0 10px 10px 0;
top: 0;
height: 100%;
width: 30px;
`

export const Paper = styled.div`
  position: relative;
  background: ${styleGuide.color.paper};
  border-radius: 10px;
  @media (min-width: ${styleGuide.device.md}) {
    &:after {
      ${sheet}
      right: 4px;
    }
    &:before {
      ${sheet}
      right: 8px;
    }
  }
`
