import { getUserAuthData } from 'entities/User'
import { ReactElement, Suspense, memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import {
  AppRoutesProps,
  routeConfig,
} from 'shared/config/routeConfig/routeConfig'
import PageLoader from 'widgets/PageLoader/ui/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = () => {
  const renderWithWrapper = useCallback(
    (route: AppRoutesProps) => (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{route.element as ReactElement}</RequireAuth>
          ) : (
            route.element
          )
        }
      />
    ),
    [],
  )
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
