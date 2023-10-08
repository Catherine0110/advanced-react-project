import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Text, { TextAlign } from 'shared/ui/Text/Text'
import cls from './ArticleImageBlockComponent.module.scss'
import { ArticleImage } from '../../models/types/articles'

interface ArticleImageBlockComponentProps {
  className?: string,
  block: ArticleImage
}

const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { className, block } = props
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img className={cls.img} src={block.src} alt={block.title || ''} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  )
}

export default ArticleImageBlockComponent
