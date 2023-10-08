import React, { memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ButtonThemes } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import CopyIcon from 'shared/assets/copy.svg'
import cls from './Code.module.scss'

interface CodeProps {
  className?: string,
  text: string
}

const Code = memo((props: CodeProps) => {
  const { className, text } = props
  const { t } = useTranslation()
  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])
  return (
    <div className={classNames(cls.CodeWrap, {}, [className])}>
      <pre className={classNames(cls.Code, {}, [className])}>
        <Button onClick={copyCode} theme={ButtonThemes.CLEAR} className={cls.copyBtn}><CopyIcon /></Button>
        <code>
          {text}
        </code>
      </pre>
    </div>
  )
})

export default Code
