import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Articles/models/types/articles';

export const getArticlesPageIsLoad = (state: StateSchema) => state.articlePage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlePage?.error || false
export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view || ArticleView.SMALL
export const getArticlesPageNumber = (state: StateSchema) => state.articlePage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlePage?.hasMore
