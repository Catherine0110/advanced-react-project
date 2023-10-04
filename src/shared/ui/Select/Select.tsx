import React, { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss'

interface SelectOptions {
    value: string,
    content: string
}

interface SelectProps {
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (val: string) => void,
    readonly?: boolean,
    className?: string
}

const Select = memo((props: SelectProps) => {
  const { label, onChange, options, value, readonly, className } = props

  const optionsList = useMemo(() => options?.map((opt) => <option className={cls.option} key={opt.value} value={opt.value}>{opt.content}</option>), [options])

  const onChangeSelect = (evt: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(evt.target.value)
  }
  return (
    <div className={classNames(cls.Wrap, { [cls.readonly]: readonly }, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select disabled={readonly} onChange={onChangeSelect} value={value} className={cls.select}>
        {optionsList}
      </select>
    </div>
  );
});

export default Select;
