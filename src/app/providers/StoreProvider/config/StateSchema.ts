import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticlesSchema } from 'entities/Articles/models/types/articles';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUserName';
import { addCommentFormSchema } from 'features/addCommentForm';
import { ArticlePageSchema } from 'pages/ArticlePage';
import { ArticlePageDetailCommentsSchema } from 'pages/ArticlePageDetail';
import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
    user: UserSchema,
    loginForm?: loginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticlesSchema,
    articleDetailComments?: ArticlePageDetailCommentsSchema,
    addCommentForm?: addCommentFormSchema,
    articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: reducerManager
}

export interface ThunkExtra {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    extra: ThunkExtra,
    rejectValue: T,
    state: StateSchema
}
