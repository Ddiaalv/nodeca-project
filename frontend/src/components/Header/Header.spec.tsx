import { render } from '@testing-library/react'
import { Header } from './Header'
import { routes } from '../../../utils/routes'

test('should display all menu elements', () => {
  const { getByText } = render(<Header />)
  for (const key in routes) {
    const routeName = routes[key].name
    expect(getByText(routeName)).toBeTruthy()
  }
})
