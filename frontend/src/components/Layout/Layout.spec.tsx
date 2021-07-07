import { render } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  test('should display Header section', () => {
    const { getByText } = render(<Layout />)
    const header = getByText('Home')
    expect(header).toBeTruthy()
  })
  test('should display Footer section', () => {
    const { getByText } = render(<Layout />)
    const footer = getByText('Creado por David Díaz Alvarez')
    expect(footer).toBeTruthy()
  })
})
