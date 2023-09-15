/* eslint-disable i18next/no-literal-string */
import { Suspense, useContext, useEffect, useRef, useState } from 'react'

import './styles/index.scss'

import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar/NavBar'
import { SideBar } from 'widgets/SideBar'

import 'shared/config/i18next/i18n'
import { ModalContext } from 'app/providers/Modal/lib/ModalContext'

import Modal from 'shared/ui/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'

export const App = () => {
  const { theme } = useTheme()
  const { close, modal, childAppend } = useContext(ModalContext)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)
  const appRef = useRef()
  const [refA, setRefA] = useState(null)

  useEffect(() => {
    dispatch(userActions.initAuthData())
    setRefA(appRef.current)
  }, [dispatch])

  useEffect(() => {
    if (modal && authData) {
      close()
    }
  }, [authData, modal, close])

  return (
    <div ref={appRef} id="app" className={theme}>
      <Suspense fallback="loading...">
        <NavBar />
        <div className="page-content">
          <SideBar />
          <AppRouter />
        </div>
        <Modal lazy isOpen={modal} closeModal={close}>
          {childAppend}
        </Modal>
      </Suspense>
    </div>
  )
}

export default App
