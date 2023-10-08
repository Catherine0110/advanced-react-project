import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { articleDetailData, articleDetailError, articleDetailLoading } from 'entities/Articles/models/selectors/articleDetail'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { ArticleReducer } from 'entities/Articles/models/slice/articleSlice'

import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text'
import EyeIcon from 'shared/assets/eye.svg'
import CalendarIcon from 'shared/assets/calendar.svg'
import Skeleton from 'shared/ui/Skeleton/Skeleton'
import Avatar from 'shared/ui/Avatar/Avatar'
import ArticleImageBlockComponent from 'entities/Articles/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import ArticleTextBlockComponent from 'entities/Articles/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { fetchArticleData } from '../../models/services/getArticleById'
import cls from './ArticleDetails.module.scss'
import { ArticleBlock, ArticleBlockType } from '../../models/types/articles'
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'

interface ArticleDetailsProps {
  className?: string,
  id: string
}

const reducers: ReducersList = {
  articleDetails: ArticleReducer,
};

const ArticleDetails = (props: ArticleDetailsProps) => {
  const { className, id } = props
  const dispatch = useAppDispatch()
  let content;
  const article = useSelector(articleDetailData);
  const error = useSelector(articleDetailError);
  const isLoading = useSelector(articleDetailLoading);
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleData(id))
    }
  }, [dispatch, id])

  const articlesBlockRender = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent block={block} />
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent block={block} />
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent block={block} />
    default:
      return null;
    }
  }

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width="100%" height={24} />
        <Skeleton className={cls.skeleton} width="calc(100% - 20px)" height={200} />
        <Skeleton className={cls.skeleton} width="calc(100% - 20px)" height={200} />
      </>
    )
  } else if (error) {
    content = (<Text size={TextSize.L} title={error} align={TextAlign.CENTER} theme={TextTheme.ERROR} />)
  } else {
    // eslint-disable-next-line i18next/no-literal-string
    content = (
      (article
        && (
          <>
            <div className={cls.imgWrap}>
              <Avatar size={200} src={article?.img} alt={article.title} />
            </div>
            <Text className={cls.titleBlock} title={article.title} text={article.subtitle} size={TextSize.XL} />
            <div className={cls.articleInfoWrap}>
              <div className={cls.articleInfo}>
                <EyeIcon className={cls.icon} />
                <Text text={article.views} />
              </div>
              <div className={cls.articleInfo}>
                <CalendarIcon className={cls.icon} />
                <Text text={article.createdAt} />
              </div>
            </div>
            {article.blocks.map(articlesBlockRender)}
          </>
        )
      )
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
}

export default ArticleDetails
