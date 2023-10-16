import React from 'react';
import HomeIcon from 'shared/assets/home.svg'
import AboutIcon from 'shared/assets/about.svg'
import ProfileIcon from 'shared/assets/profile.svg'
import ArticleIcon from 'shared/assets/articles.svg'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SideBarItemType } from '../../models/types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sideBarItemsList: SideBarItemType[] = [
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
  ]

  if (userData) {
    sideBarItemsList.push(
      {
        path: RoutePaths.profile + userData.id,
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
    )
  }
  return sideBarItemsList
})
