import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Code from 'shared/ui/Code/Code'
import cls from './ArticleCodeBlockComponent.module.scss'
import { ArticleCode } from '../../models/types/articles'

interface ArticleCodeBlockComponentProps {
  className?: string,
  block: ArticleCode
}

const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
}

export default ArticleCodeBlockComponent
