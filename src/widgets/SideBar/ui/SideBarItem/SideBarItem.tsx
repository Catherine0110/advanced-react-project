import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { SideBarItemType } from 'widgets/SideBar/models/items'
import cls from './SideBarItem.module.scss'

interface SideBarItemProps {
  item: SideBarItemType
  collapsed: boolean
}

const SideBarItem = memo(({ item, collapsed }: SideBarItemProps) => {
  const { t } = useTranslation()
  return (
    <AppLink
      theme={AppLinkTheme.INVERTED_PRIMARY}
      className={cls.mainLink}
      to={item.path}
    >
      {item.icon && <item.icon className={cls.icon} />}
      {!collapsed && <span className={cls.text}>{t(item.text || '')}</span>}
    </AppLink>
  )
})

export default SideBarItem
