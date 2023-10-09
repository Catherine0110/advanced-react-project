import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comments';

export interface ArticlePageDetailCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean,
    error?: string,
}
