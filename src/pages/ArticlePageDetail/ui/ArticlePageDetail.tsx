import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Articles'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CommentList from 'entities/Comments/ui/CommentList/CommentList'
import { Comment } from 'entities/Comments'
import Text from 'shared/ui/Text/Text'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader'
import { articleDetailCommentReducer, getArticleComments } from 'pages/ArticlePageDetail/model/slice/articleDetailCommentSlice'
import { useSelector } from 'react-redux'
import { getCommentsLoad } from 'pages/ArticlePageDetail/model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEfect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import cls from './ArticlePageDetail.module.scss'
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById/fetchArticleCommentsById'

interface ArticlePageDetailProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailComments: articleDetailCommentReducer,
};

const ArticlePageDetail = (props: ArticlePageDetailProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsLoad = useSelector(getCommentsLoad)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchArticleCommentsById('2'))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticlePageDetail, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  const commentExample: Comment[] = [
    {
      id: '1',
      text: 'some comment',
      user: { username: 's', id: '10', avatar: 'https://i.pinimg.com/736x/c6/a7/08/c6a708a4cec8e91f006d4b024760ea37.jpg' },
    },
    {
      id: '2',
      text: 'some comment2',
      user: { username: 's', id: '11', avatar: 'https://i.pinimg.com/736x/c6/a7/08/c6a708a4cec8e91f006d4b024760ea37.jpg' },
    },
  ]
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticlePageDetail, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <CommentList isLoading={commentsLoad} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default ArticlePageDetail
