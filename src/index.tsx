import { render } from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

import ModalState from 'app/providers/Modal/lib/ModalContext'
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider'
import App from './app/App'
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider'

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <ModalState>
            <App />
          </ModalState>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
)
