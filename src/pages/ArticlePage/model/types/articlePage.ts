import { EntityState } from '@reduxjs/toolkit';
import { ArticleView, Articles } from 'entities/Articles/models/types/articles';

export interface ArticlePageSchema extends EntityState<Articles> {
    isLoading?: boolean,
    error?: string,
    view: ArticleView,
    page: number,
    limit?: number,
    hasMore: boolean
}
