import { fireEvent, render, screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations'
import SideBar from './SideBar'

describe('sidebar', () => {
  test('is sidebar', () => {
    renderWithTranslations(<SideBar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('sidebar toggle', () => {
    renderWithTranslations(<SideBar />)
    const toggleBtn = screen.getByTestId('toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
