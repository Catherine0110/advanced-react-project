import React, { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps {
  className?: string
  children: ReactNode
}

const Card = (props: CardProps) => {
  const { className, children } = props
  return <div className={classNames(cls.Card, {}, [className])}>{children}</div>
}

export default Card
