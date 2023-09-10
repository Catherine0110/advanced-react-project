import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonThemes {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  INVERTED_BG = 'bgInvertedBtn',
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonThemes
  size?: ButtonSize
  square?: boolean
}

const Button: FC<ButtonProps> = (props) => {
  const { className, theme, size, square, children, ...otherProps } = props
  const additionalClasses = [className, cls[theme], cls[size]]
  const modeClasses = {
    [cls.square]: true,
  }
  return (
    <button {...otherProps} className={classNames(cls.Button, modeClasses, additionalClasses)}>
      {children}
    </button>
  )
}

export default Button
