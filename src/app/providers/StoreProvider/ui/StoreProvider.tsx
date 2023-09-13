import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReduxStore } from 'app/providers/StoreProvider/config/store'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props
  const store = createReduxStore(initialState)
  return <Provider store={store}>{children}</Provider>
}
