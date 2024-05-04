import React, { ChangeEvent } from 'react'

import s from './input.module.scss'

export type PropsType = {
  //className?: string
  className?: 'active' | 'default' | 'error' | null | undefined
  disabled?: boolean
  maxLength?: number
  minLength?: number
  name: string
  //onBlur?: boolean
  onChange: (e: string) => void
  //onFocus?: boolean
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  type: 'date' | 'email' | 'number' | 'password' | 'text'
  value: number | string
}

export const Input: React.FC<PropsType> = props => {
  const { className, onChange, value, ...restProps } = props

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  //const finalClassName = className ? className : 'default'

  return (
    <div>
      <input
        //className={className ? s.className : s.default}
        className={s[className ? className : 'default']}
        onChange={e => changeHandler(e)}
        {...restProps}
      />
    </div>
  )
}
// не сделано
// Поддерживает пользовательский индикатор валидации,
// который позволяет пользователю знать, когда введенные данные являются некорректными.
