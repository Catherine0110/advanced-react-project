/* eslint-disable max-len */
import { ArticleView } from 'entities/Articles/models/types/articles'
import ArticleList from 'entities/Articles/ui/ArticleList/ArticleList'
import ArticleViewSelector from 'entities/Articles/ui/ArticleViewSelector/ArticleViewSelector'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEfect'
import Page from 'shared/ui/Page/Page'
import { fetchArticleNextPage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage'
import {
  getArticlesPageError,
  getArticlesPageIsLoad,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors'
import { fetchArticlePage } from '../model/services/fetchArticlePage'
import {
  articlePageActions,
  articlePageReducer,
  getArticles,
} from '../model/slice/articlesPageSlice'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlePage: articlePageReducer,
}

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const isLoad = useSelector(getArticlesPageIsLoad)
  const articles = useSelector(getArticles.selectAll)

  const onViewClick = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view))
    },
    [dispatch],
  )

  const onLoadContent = useCallback(() => {
    dispatch(fetchArticleNextPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(articlePageActions.initView())
    dispatch(
      fetchArticlePage({
        page: 1,
      }),
    )
  })
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadContent}
        className={classNames(cls.ArticlePage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList isLoading={isLoad} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlePage
