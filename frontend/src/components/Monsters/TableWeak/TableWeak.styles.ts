import styled from '@emotion/styled'

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
