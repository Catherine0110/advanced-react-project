import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { ThemeSwitcherThemes } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import Button, { ButtonSize, ButtonThemes } from 'shared/ui/Button/Button'

import { SideBarItemsList } from 'widgets/SideBar/models/items'
import SideBarItem from 'widgets/SideBar/ui/SideBarItem/SideBarItem'
import cls from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}

const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.sidebarLinks}>
        {SideBarItemsList.map((item) => (
          <SideBarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.swithers}>
        <ThemeSwitcher colors={ThemeSwitcherThemes.INVERTED} />
        <LangSwitcher className={cls.lang} />
      </div>
      <Button
        square
        size={ButtonSize.XL}
        theme={ButtonThemes.INVERTED_BG}
        className={cls.toggleBtn}
        data-testid="toggle"
        onClick={onToggle}
      >
        {t(`${collapsed ? '<' : '>'}`)}
      </Button>
    </div>
  )
}

export default SideBar
