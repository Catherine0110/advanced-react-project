import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Card from 'shared/ui/Card/Card'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import { ArticleView } from 'entities/Articles/models/types/articles'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemSkeletonProps {
  view: string
  className?: string
}

const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props
  if (view === ArticleView.BIG) {
    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <div className={cls.avaWrap}>
              <Skeleton
                className={cls.ava}
                width={30}
                height={30}
                border="50%"
              />
              <Skeleton width={150} height={16} className={cls.userName} />
            </div>
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.userName} />
          <Skeleton height={200} className={cls.img} />
          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={classNames(cls.card, {}, [cls.ArticleListItemSkeleton])}>
        <div className={cls.ArticleListItemImgWrap}>
          <Skeleton
            width={200}
            height={200}
            className={cls.ArticleListItemImg}
          />
        </div>
        <div className={cls.ArticleListItemContent}>
          <div className={cls.ArticleListItemContentHead}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton
            width={150}
            height={16}
            className={cls.ArticleListItemContentTitle}
          />
        </div>
      </Card>
    </div>
  )
})

export default ArticleListItemSkeleton
