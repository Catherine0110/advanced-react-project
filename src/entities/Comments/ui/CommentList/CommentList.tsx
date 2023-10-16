import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import CommentCard from 'entities/Comments/ui/CommentCard/CommentCard'
import cls from './CommentList.module.scss'
import { Comment } from '../../model/types/comments'

interface CommentListProps {
  className?: string
  comments: Comment[],
  isLoading?: boolean
}

const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.map((comment) => <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />)}
    </div>
  )
}

export default CommentList
