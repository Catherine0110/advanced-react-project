import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleListItemSkeleton from 'entities/Articles/ui/ArticleListItem/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'
import { ArticleView, Articles } from '../../models/types/articles'
import ArticleListItem from '../ArticleListItem/ArticleListItem'

interface ArticleListProps {
  className?: string
  articles: Articles[]
  isLoading?: boolean
  view?: ArticleView
}

const ArticleList = (props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleView.SMALL } = props
  const renderItems = (article: Articles) => (
    <ArticleListItem
      className={cls.card}
      key={article.id}
      view={view}
      article={article}
    />
  )

  const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
      .fill(0)
      .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
      ))

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles?.length > 0 ? articles?.map(renderItems) : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
}

export default ArticleList
