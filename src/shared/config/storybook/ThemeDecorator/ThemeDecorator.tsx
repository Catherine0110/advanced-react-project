import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <div id="app" className={theme}>
      <StoryComponent />
    </div>
  )
