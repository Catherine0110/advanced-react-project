import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    user?: UserSchema,
    loginForm?: loginSchema
}
