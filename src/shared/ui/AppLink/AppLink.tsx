import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { children, className, to, theme = AppLinkTheme.PRIMARY } = props
  return (
    <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} to={to}>
      {children}
    </Link>
  )
}

export default AppLink
