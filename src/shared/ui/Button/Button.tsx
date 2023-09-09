import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes
}

const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props
  return (
    <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  )
}

export default Button
