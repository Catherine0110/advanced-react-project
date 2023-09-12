import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

import ModalState from 'app/providers/Modal/lib/ModalContext'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <ModalState>
          <App />
        </ModalState>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)
