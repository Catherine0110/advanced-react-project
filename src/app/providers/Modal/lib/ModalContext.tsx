import React, { ReactNode, createContext, useCallback, useMemo, useState } from 'react'

interface IModalContex {
  modal: boolean
  open: () => void
  close: () => void
  setCh: (el: ReactNode | string | null) => void
  childAppend: ReactNode | string | null
}

export const ModalContext = createContext<IModalContex>({
  modal: false,
  open: () => {},
  close: () => {},
  setCh: () => {},
  childAppend: null,
})

const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false)
  const [childAppend, setChi] = useState(null)
  const open = useCallback(() => {
    setModal(true)
    document.body.className = 'overflow'
  }, [])
  const close = useCallback(() => {
    setModal(false)
    document.body.className = ''
  }, [])
  const setCh = useCallback((element: ReactNode | string | null) => setChi(element), [])
  const modalProviderValues = useMemo(
    () => ({ open, close, modal, childAppend, setCh }),
    [open, close, modal, childAppend, setCh],
  )
  return <ModalContext.Provider value={modalProviderValues}>{children}</ModalContext.Provider>
}

export default ModalState
