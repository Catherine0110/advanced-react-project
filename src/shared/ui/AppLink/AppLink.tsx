import { FC, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'invertedPrimary',
  INVERTED_SECONDARY = 'invertedSecondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const { children, className, to, theme = AppLinkTheme.PRIMARY } = props
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to}>
      {children}
    </Link>
  )
})

export default AppLink
