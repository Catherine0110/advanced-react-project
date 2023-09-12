import React, { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  element?: HTMLElement
}

const Portal = (props: PortalProps) => {
  const { children, element } = props

  return createPortal(children, element)
}

export default Portal
