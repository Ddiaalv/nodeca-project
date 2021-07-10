import { render } from '@testing-library/react'
import { routes } from '../../../utils/routes/routes'
import { NavMenu } from './NavMenu'

test('should display the default message', () => {
  const { getByText } = render(<NavMenu />)
  const menuTitle = routes.home.name
  const linkElement = getByText(menuTitle)
  expect(linkElement).toBeTruthy()
})
