import styled from '@emotion/styled'
import { styleGuide } from '../../../../utils/styleGuide'
import bgIcon from '../../../assets/monster-icon.jpg'

export const ListStyled = styled.div`
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-rows: repeat(5, 80px);
  grid-auto-columns: 80px;
  grid-auto-flow: column;
  align-items: center;
  align-content: center;
  grid-gap: 5px;
  overflow-x: scroll;
  @media (min-width: ${styleGuide.device.lg}) {
    overflow-x: initial;
    grid-template-rows: initial;
    grid-auto-flow: initial;
    grid-template-columns: repeat(auto-fill, 80px);
    justify-content: center;
    justify-items: center;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bgIcon}) no-repeat left top;
  background-size: cover;
  height: 80px;
  width: 80px;
`
