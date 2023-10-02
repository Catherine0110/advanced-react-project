import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileLoad = (state: StateSchema) => state?.profile?.error
