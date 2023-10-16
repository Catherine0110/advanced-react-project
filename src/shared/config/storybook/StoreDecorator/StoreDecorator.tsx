import { Story } from '@storybook/react'
import {
  StateSchema,
  StoreProvider,
} from 'app/providers/StoreProvider'
import { ArticleReducer } from 'entities/Articles/models/slice/articleSlice'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUserName'
import { addCommentFormReducer } from 'features/addCommentForm'
import { articleDetailCommentReducer } from 'pages/ArticlePageDetail/model/slice/articleDetailCommentSlice'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader'

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: ArticleReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailComments: articleDetailCommentReducer,
}

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
)
