import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import Avatar from 'shared/ui/Avatar/Avatar'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comments'

interface CommentCardProps {
  className?: string
  comment: Comment,
  isLoading?: boolean
}

const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton className={cls.ava} border="50%" width={30} height={30} />
          <Skeleton width={100} height={15} />
        </div>
        <Skeleton width="30%" height={30} />
      </div>
    )
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} className={cls.ava} /> : null}
        <Text text={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  )
}

export default CommentCard
