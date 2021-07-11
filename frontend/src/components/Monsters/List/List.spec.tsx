import { render } from '@testing-library/react'
import { List } from './List'

test('should display the default message', () => {
  const { getByText } = render(<List />)
  const linkElement = getByText('Hello from List!')
  expect(linkElement).toBeTruthy()
})
