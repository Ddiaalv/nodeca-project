import styled from '@emotion/styled'
import { styleGuide } from '../../utils/styleGuide'
import bgIcon from '../assets/monster-icon.jpg'

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 5px;
  grid-gap: 10px;
  @media (min-width: ${styleGuide.device.lg}) {
    padding: 10px;
    grid-template-columns: 250px 2fr;
  }
`

export const Browser = styled.form`
  background: linear-gradient(
    130deg,
    ${styleGuide.color.yellow.light},
    ${styleGuide.color.yellow.dark}
  );
  display: grid;
  grid-template-columns: 180px 1fr;
  padding: 5px;
  border-bottom-right-radius: 60px 5px;
  border-bottom-left-radius: 102px 5px;
  box-shadow: 1px 1px 10px -7px rgb(0 0 0 / 75%);
  & fieldset:nth-of-type(1) {
    grid-column: 1/-1;
  }
  @media (min-width: ${styleGuide.device.lg}) {
    grid-template-columns: initial;
  }
`

export const FormSection = styled.fieldset`
  display: grid;
  border: 0;
  padding: 5px 0;
  margin: 0;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  legend {
    font-weight: bolder;
    grid-column: 1/-1;
  }
  @media (min-width: ${styleGuide.device.lg}) {
    grid-template-columns: initial;
  }
`

/*

  SI ES UN MOVIL CAMBIAR EL 5 POR 3
  grid-template-rows: repeat(5, 80px);

*/

export const List = styled.div`
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
