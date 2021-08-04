import styled from '@emotion/styled'
import { styleGuide } from '../../utils/styleGuide'

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

export const Article = styled.article`
  display: grid;
  grid-gap: 10px;
  padding: 0 20px;
  h2 {
    justify-self: start;
  }
  h3 {
    margin: 0;
    margin-top: 5px;
  }
  p {
    margin: 5px 0;
  }
`

export const Information = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  img {
    width: 90px;
    grid-row: 1/-1;
  }
  h4 {
    margin: 1px;
  }
  p {
    margin: 1px;
  }
`

export const RowIconText = styled.p`
  display: grid;
  grid-template-columns: 25px 1fr;
  align-items: center;
  margin: 5px 0;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`

export const Quote = styled.div`
  background: #e9e1d0;
  max-width: 400px;
  padding: 10px;
  border: 1px dashed #ab874d;
  text-align: center;
  justify-self: center;
`

export const Weakness = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Table = styled.table`
  display: grid;
  row-gap: 5px;
  min-width: 100px;
  thead {
    padding: 5px 0;
    th {
      text-align: left;
    }
  }
`

export const Row = styled.tr`
  display: grid;
  grid-template-columns: 25px 1fr;
`

export const Physiology = styled.img`
  min-width: 300px;
  max-width: 70%;
  justify-self: center;
  align-self: center;
`
