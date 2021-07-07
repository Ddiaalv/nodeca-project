import styled from '@emotion/styled'

export const LayoutStyled = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  header,
  footer {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main {
    flex: 1;
  }
`
