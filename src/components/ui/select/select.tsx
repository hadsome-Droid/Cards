import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type PropsType = {
  onChange: (newItemsPerPage: number) => void
  value: number
}

const itemsPerPageOptions = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const CustomSelect = ({ onChange, value }: PropsType) => {
  const selectedValue = String(value)

  return (
    <Select.Root onValueChange={newValue => onChange(Number(newValue))} value={selectedValue}>
      <Select.Trigger aria-label={'Select the number of items'} className={s.SelectTrigger}>
        <Select.Value placeholder={selectedValue}>{selectedValue}</Select.Value>
        <Select.Icon className={s.SelectIcon} />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={s.SelectContent} position={'popper'}>
          {itemsPerPageOptions.map(option => (
            <Select.Item className={s.SelectItem} key={option.value} value={option.value}>
              {option.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
