import { useState } from 'react'

import { Check } from '@/assets/icons/components/check/check'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkBox.module.scss'

export const CheckBox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={s.Box}>
      <Checkbox.Root
        className={s.CheckboxRoot}
        id={'c1'}
        onCheckedChange={() => setChecked(!checked)}
      >
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <Check size={22} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={s.Label} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  )
}
