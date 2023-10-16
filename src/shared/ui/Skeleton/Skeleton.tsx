import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string,
  height?: string | number,
  width?: string | number,
  border?: string,
}

const Skeleton = (props: SkeletonProps) => {
  const { className, border, height, width } = props
  const styles = {
    borderRadius: border,
    height,
    width,
  }
  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  )
}

export default Skeleton