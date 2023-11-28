import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleSmallIcon from 'shared/assets/article-small.svg'
import ArticleBigIcon from 'shared/assets/article-big.svg'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '../../models/types/articles'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  { icon: ArticleSmallIcon, view: ArticleView.BIG },
  { icon: ArticleBigIcon, view: ArticleView.SMALL },
]

const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props
  const onChangeView = (newView: ArticleView) => () => {
    onViewClick?.(newView)
  }

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonThemes.CLEAR}
          onClick={onChangeView(viewType.view)}
          className={classNames(cls.btn, {
            [cls.notSelected]: viewType.view !== view,
          })}
        >
          <viewType.icon />
        </Button>
      ))}
    </div>
  )
}

export default ArticleViewSelector
