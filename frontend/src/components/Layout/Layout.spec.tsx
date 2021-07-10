import { render } from '@testing-library/react'
import { routes } from '../../../utils/routes/routes'
import Layout from './Layout'

describe('Layout', () => {
  test('should display NavMenu', () => {
    const { getByText } = render(<Layout />)
    const routesContent = Object.keys(routes)
    routesContent.forEach((key) => {
      const menuName = getByText(routes[key].name)
      expect(menuName).toBeTruthy()
    })
  })
  test('should display Footer section', () => {
    const { getByText } = render(<Layout />)
    const footer = getByText('Creado por David Díaz Alvarez')
    expect(footer).toBeTruthy()
  })
})
