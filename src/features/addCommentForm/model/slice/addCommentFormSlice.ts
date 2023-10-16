import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { addCommentFormSchema } from '../types/addCommentForm'

const initialState: addCommentFormSchema = {
  text: '',
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginByUserName.pending, (state, action) => {
//         state.isLoad = true
//         state.error = ''
//       })
//       .addCase(loginByUserName.fulfilled, (state, action) => {
//         state.isLoad = false
//       })
//       .addCase(loginByUserName.rejected, (state, action) => {
//         state.isLoad = false
//         state.error = action.payload
//       })
//   },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
