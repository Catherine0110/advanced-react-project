import React, { memo, useCallback } from 'react';
import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    value?: string,
    onChange?: (val: Currency) => void,
    readonly?: boolean,
    className?: string
}

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { readonly, onChange, value, className } = props
  const { t } = useTranslation()
  const changeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])
  return (
    <Select
      label={t('Выбор валюты')}
      value={value}
      onChange={changeHandler}
      options={options}
      readonly={readonly}
      className={className}
    />
  );
});
