import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import EyeIcon from 'shared/assets/eye.svg'
import Card from 'shared/ui/Card/Card'
import Avatar from 'shared/ui/Avatar/Avatar'
import Text from 'shared/ui/Text/Text'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import ArticleTextBlockComponent from 'entities/Articles/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import {
  ArticleBlockType,
  ArticleText,
  ArticleView,
  Articles,
} from '../../models/types/articles'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Articles
  view: ArticleView
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const types = <Text className={cls.text} text={article.type.join(', ')} />
  const views = (
    <div className={cls.ArticleListItemContentViews}>
      <Text text={article.views} className={cls.ArticleListItemContentView} />
      <EyeIcon />
    </div>
  )
  const onOpenArticle = useCallback(() => {
    navigate(RoutePaths.article_details + article.id)
  }, [article.id, navigate])
  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleText

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <div className={cls.avaWrap}>
              <Avatar
                className={cls.ava}
                src={article?.user?.avatar || ''}
                size={30}
              />
              <Text className={cls.userName} text={article.user.username} />
            </div>
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <Text className={cls.title} title={article.title} />
          {types}
          <img className={cls.img} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.blockText}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonThemes.OUTLINE}>
              {t('Читать далее...')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div
      onClick={onOpenArticle}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.ArticleListItemImgWrap}>
          <img className={cls.ArticleListItemImg} src={article.img} alt="" />
        </div>
        <span className={cls.ArticleListItemImgDate}>{article.createdAt}</span>
        <div className={cls.ArticleListItemContent}>
          <div className={cls.ArticleListItemContentHead}>
            {types}
            {views}
          </div>
          <p className={cls.ArticleListItemContentTitle}>{article.title}</p>
        </div>
      </Card>
    </div>
  )
}

export default ArticleListItem
