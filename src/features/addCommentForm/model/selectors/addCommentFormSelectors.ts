import { StateSchema } from 'app/providers/StoreProvider';

export const addCommentFormError = (state: StateSchema) => state?.addCommentForm?.error
export const addCommentFormText = (state: StateSchema) => state?.addCommentForm?.text
