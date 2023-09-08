import { render, screen } from '@testing-library/react'
import Button, { ButtonThemes } from './Button'

describe('button', () => {
  test('btn', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  test('btn has class', () => {
    render(<Button theme={ButtonThemes.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
    screen.debug()
  })
})
