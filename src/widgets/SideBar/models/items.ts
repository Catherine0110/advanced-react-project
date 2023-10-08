import React from 'react';
import HomeIcon from 'shared/assets/home.svg'
import AboutIcon from 'shared/assets/about.svg'
import ProfileIcon from 'shared/assets/profile.svg'
import ArticleIcon from 'shared/assets/articles.svg'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

export interface SideBarItemType {
    path: string,
    text?: string,
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePaths.main,
    text: 'Главная',
    icon: HomeIcon,
  },
  {
    path: RoutePaths.about,
    text: 'O нас',
    icon: AboutIcon,
  },
  {
    path: RoutePaths.profile,
    text: 'Профиль',
    icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePaths.articles,
    text: 'Статьи',
    icon: ArticleIcon,
    authOnly: true,
  },
]
