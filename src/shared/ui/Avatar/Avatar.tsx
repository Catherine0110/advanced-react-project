import React, { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss'

interface AvatarProps {
    src: string,
    alt?: string,
    size?: number,
    className?: string
}

const Avatar = memo((props: AvatarProps) => {
  const { src, alt, size, className } = props
  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size])
  return (
    <img style={styles} className={classNames(cls.avatarImg, {}, [className])} src={src} alt={alt} />
  );
});

export default Avatar;
