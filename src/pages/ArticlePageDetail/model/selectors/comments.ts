import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentsLoad = (state: StateSchema) => state.articleDetailComments?.isLoading
export const getCommentsError = (state: StateSchema) => state.articleDetailComments?.error
