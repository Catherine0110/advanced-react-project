import React, { Suspense } from 'react'
import { Example } from './components/Example'
import { Route, Routes } from 'react-router-dom'
import { MainPageAsync } from './components/MainPage/MainPage.async'
import { AboutPageAsync } from './components/AboutPage/AboutPage.async'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'

export const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="app" className={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={'Load...'}>
        <Routes>
          <Route path="/" element={<MainPageAsync />}></Route>
          <Route path="/about" element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
