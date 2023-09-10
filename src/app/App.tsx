/* eslint-disable i18next/no-literal-string */
import { Suspense, useEffect } from 'react'

import './styles/index.scss'

import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar/NavBar'
import { SideBar } from 'widgets/SideBar'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'

import 'shared/config/i18next/i18n'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div id="app" className={theme}>
      <Suspense fallback="loading...">
        <NavBar />
        <div className="page-content">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
