import { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { ThemeSwitcherThemes } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

import LangSwitcher from 'shared/ui/LangSwitcher/LangSwitcher'
import Button from 'shared/ui/Button/Button'
import cls from './SideBar.module.scss'

interface SideBarProps {
  className?: string
}

const SideBar: FC<SideBarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t, i18n } = useTranslation()

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.swithers}>
        <ThemeSwitcher colors={ThemeSwitcherThemes.INVERTED} />
        <LangSwitcher className={cls.lang} />
      </div>
      <Button data-testid="toggle" onClick={onToggle}>
        {t('Toggle')}
      </Button>
    </div>
  )
}

export default SideBar
