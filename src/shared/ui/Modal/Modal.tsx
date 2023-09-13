import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import Portal from 'shared/ui/Portal/Portal'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import cls from './Modal.module.scss'

interface ModalProp {
  children: React.ReactNode
  closeModal: () => void
  portalEl?: HTMLElement
  isOpen: boolean
  lazy: boolean
}

const Modal: React.FC<ModalProp> = ({ children, closeModal, portalEl, isOpen, lazy }) => {
  const el = portalEl || document.body
  const [contentClose, setContentClose] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  const modalClose = useCallback(() => {
    setContentClose(true)
    closeModal()
    setContentClose(false)
  }, [closeModal])

  const onkeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    },
    [closeModal],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onkeydown)
    }

    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [isOpen, onkeydown])

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    }
  }, [isOpen])

  if (lazy && !mounted) {
    return null
  }

  return (
    <Portal element={el}>
      <div
        className={classNames(
          cls.Modal,
          { [cls.contentClose]: contentClose, [cls.isOpen]: isOpen },
          [theme, 'app_modal'],
        )}
        onClick={modalClose}
      >
        <div onClick={(e) => e.stopPropagation()} className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
