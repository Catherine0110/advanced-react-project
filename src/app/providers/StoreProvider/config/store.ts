import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({

    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
  // @ts-ignore
  store.reducerManager = reducerManager
  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
