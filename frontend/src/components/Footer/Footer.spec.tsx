import { render } from '@testing-library/react'
import { Footer } from './Footer'

test('should display the default message', () => {
  const { getByText } = render(<Footer />)
  const linkElement = getByText('Creado por David Díaz Alvarez')
  expect(linkElement).toBeTruthy()
})
