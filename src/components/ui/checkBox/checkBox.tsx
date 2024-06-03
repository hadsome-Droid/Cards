import { useState } from 'react'

import { Check } from '@/assets/icons/components/check/check'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkBox.module.scss'

type Props = {
  disabled?: boolean
  label?: string
}

export const CheckBox = ({ disabled, label, ...rest }: Props) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={s.Box}>
      <Checkbox.Root
        className={s.CheckboxRoot}
        disabled={disabled}
        id={'c1'}
        onCheckedChange={() => setChecked(!checked)}
        {...rest}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <Check size={22} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={disabled ? s.DisabledLabel : s.Label} htmlFor={'c1'}>
        {label}
      </label>
    </div>
  )
}
