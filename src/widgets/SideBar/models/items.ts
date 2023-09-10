import React from 'react';
import HomeIcon from 'shared/assets/home.svg'
import AboutIcon from 'shared/assets/about.svg'

export interface SideBarItemType {
    path: string,
    text?: string,
    icon?: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: '/',
    text: 'Главная',
    icon: HomeIcon,
  },
  {
    path: '/about',
    text: 'O нас',
    icon: AboutIcon,
  },
]
