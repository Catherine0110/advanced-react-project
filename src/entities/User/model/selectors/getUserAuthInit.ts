import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthInit = (state: StateSchema) => state.user._inited
