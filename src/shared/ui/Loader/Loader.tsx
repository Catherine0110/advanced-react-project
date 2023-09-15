import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

export enum LoaderSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface LoaderProps {
  className?: string
  size?: LoaderSize
}

const Loader = ({ className, size = LoaderSize.M }: LoaderProps) => (
  <div className={classNames(cls.ldsEllipsis, {}, [className, cls[size]])}>
    <div />
  </div>
)

export default Loader
