import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticlePage, {}, [className])}>
      ArticlePage
    </div>
  )
}

export default ArticlePage
