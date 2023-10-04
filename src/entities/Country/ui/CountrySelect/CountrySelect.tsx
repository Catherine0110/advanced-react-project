import React, { memo, useCallback } from 'react';
import Select from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    value?: string,
    onChange?: (val: Country) => void,
    readonly?: boolean,
    className?: string
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { readonly, onChange, value, className } = props
  const { t } = useTranslation()
  const changeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])
  return (
    <Select
      label={t('Выбор страны')}
      value={value}
      onChange={changeHandler}
      options={options}
      readonly={readonly}
      className={className}
    />
  );
});
