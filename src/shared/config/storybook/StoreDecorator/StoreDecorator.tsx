import { ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import {
  StateSchema,
  StoreProvider,
  createReduxStore,
} from 'app/providers/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUserName'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
)
