import { useState } from 'react'

import { Check } from '@/assets/icons/check'
import { Check2 } from '@/assets/icons/check2'
import { Check3 } from '@/assets/icons/check3'
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
          {checked ? <Check2 /> : <Check3 />}
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={s.Label} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  )
}
