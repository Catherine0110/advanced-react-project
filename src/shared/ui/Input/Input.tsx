import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: 'text'
  autofocus?: boolean
}

const Input = (props: InputProps) => {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const { className, onChange, type, value, autofocus, ...otherProps } = props
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      inputRef.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(cls.InputWrap, {}, [className])}>
      <input
        ref={inputRef}
        className={cls.Input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  )
}

export default Input
