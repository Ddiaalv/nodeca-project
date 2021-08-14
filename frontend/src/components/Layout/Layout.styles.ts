import styled from '@emotion/styled'
import { styleGuide } from '../../../utils/styleGuide'

const desktopNotebook = `
  margin: 0 auto;
  padding: 15px 15px 15px 5px;
  width: 90%;
`

export const Notebook = styled.div`
  position: relative;
  display: grid;
  background: #241510;
  margin-top: 50px;
  max-width: 996px;
  padding: 10px 10px 10px 5px;
  border-radius: 0 10px 10px 0;
  box-shadow: 1px -1px 5px #000;
  border-top: 1px solid #241510;
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

export const BackPaper = styled.div`
  &:before {
    position: absolute;
    z-index: 50;
    content: '';
    left: -20px;
    height: 99%;
    width: 32px;
    background: url('/img/spiral-bound.svg') left top;
    background-size: 100% 25px;
  }
`

export const Paper = styled.div`
  position: relative;
  background: ${styleGuide.color.paper};
  border-radius: 0 10px 10px 0;
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
