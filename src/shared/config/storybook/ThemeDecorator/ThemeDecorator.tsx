import { Story } from '@storybook/react'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div id="app" className={theme}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
