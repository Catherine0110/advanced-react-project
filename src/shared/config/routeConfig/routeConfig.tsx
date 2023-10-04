import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ABOUT]: { path: RoutePaths.about, element: <AboutPage /> },
  [AppRoutes.MAIN]: { path: RoutePaths.main, element: <MainPage /> },
  [AppRoutes.PROFILE]: { path: RoutePaths.profile, element: <ProfilePage />, authOnly: true },
  [AppRoutes.NOT_FOUND]: { path: RoutePaths.not_found, element: <NotFoundPage /> },
}
