import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Articles'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cls from './ArticlePageDetail.module.scss'

interface ArticlePageProps {
  className?: string
}

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticlePage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticlePage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  )
}

export default ArticlePage
