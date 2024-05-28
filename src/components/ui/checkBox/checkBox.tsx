import { Check } from '@/assets/icons/check'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkBox.module.scss'

export const CheckBox = () => {
  return (
    <div className={s.Box}>
      <Checkbox.Root className={s.CheckboxRoot} id={'c1'}>
        <Checkbox.Indicator className={s.CheckboxIndicator}>
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className={s.Label} htmlFor={'c1'}>
        Accept terms and conditions.
      </label>
    </div>
  )
}
