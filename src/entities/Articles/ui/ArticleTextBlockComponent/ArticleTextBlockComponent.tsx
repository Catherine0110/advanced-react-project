import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Text from 'shared/ui/Text/Text'
import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleText } from '../../models/types/articles'

interface ArticleTextBlockComponentProps {
  className?: string,
  block: ArticleText
}

const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { className, block } = props
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} /> }
      {block.paragraphs?.map((p) => <Text text={p} className={cls.paragraph} />) }
    </div>
  )
}

export default ArticleTextBlockComponent
