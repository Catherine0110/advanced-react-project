import React, { useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleDetails } from 'entities/Articles'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CommentList from 'entities/Comments/ui/CommentList/CommentList'
import { Comment } from 'entities/Comments'
import Text from 'shared/ui/Text/Text'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import {
  articleDetailCommentReducer,
  getArticleComments,
} from 'pages/ArticlePageDetail/model/slice/articleDetailCommentSlice'
import { useSelector } from 'react-redux'
import { getCommentsLoad } from 'pages/ArticlePageDetail/model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEfect'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { AddCommentForm } from 'features/addCommentForm'
import Button from 'shared/ui/Button/Button'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import Page from 'shared/ui/Page/Page'
import cls from './ArticlePageDetail.module.scss'
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'

interface ArticlePageDetailProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailComments: articleDetailCommentReducer,
}

const ArticlePageDetail = (props: ArticlePageDetailProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsLoad = useSelector(getCommentsLoad)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleCommentsById(id))
    }
  })

  const onBackToList = useCallback(() => {
    navigate(RoutePaths.articles)
  }, [navigate])

  if (!id) {
    return (
      <Page className={classNames(cls.ArticlePageDetail, {}, [className])}>
        {t('Статья не найдена')}
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticlePageDetail, {}, [className])}>
        <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsLoad} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlePageDetail
