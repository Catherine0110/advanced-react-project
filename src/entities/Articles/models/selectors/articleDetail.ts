import { StateSchema } from 'app/providers/StoreProvider';

export const articleDetailData = (state: StateSchema) => state?.articleDetails?.data
export const articleDetailLoading = (state: StateSchema) => state?.articleDetails?.isLoad
export const articleDetailError = (state: StateSchema) => state?.articleDetails?.error
