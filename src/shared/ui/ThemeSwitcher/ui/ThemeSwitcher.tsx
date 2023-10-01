import { FC, memo } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'

import ThemeIcon from 'shared/assets/theme-icon.svg'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import cls from './ThemeSwitcher.module.scss'

export enum ThemeSwitcherThemes {
  INVERTED = 'inverted',
}

interface ThemeSwitcherProps {
  className?: string
  colors?: ThemeSwitcherThemes
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className, colors } = props
  const { theme, toggleTheme } = useTheme()
  return (
    <Button theme={ButtonThemes.CLEAR} onClick={toggleTheme}>
      <ThemeIcon className={classNames(cls.icon, {}, [className, cls[colors]])} />
    </Button>
  )
})
