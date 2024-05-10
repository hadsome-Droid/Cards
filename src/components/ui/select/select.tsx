// import React, { ReactNode } from 'react'
//
// import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
// import * as Select from '@radix-ui/react-select'
//
// import s from './select.module.scss'
//
// // type PropsType = {
// //   children?: ReactNode
// //   className?: string
// //   data: string[]
// // }
//
// export const SelectDemo = () => (
//   <Select.Root>
//     <Select.Trigger>
//       <Select.Value />
//       <Select.Icon>
//         <ChevronDownIcon className={s.SelectIcon} />
//       </Select.Icon>
//     </Select.Trigger>
//
//     <Select.Portal>
//       <Select.Content>
//         <Select.ScrollUpButton />
//         <Select.Viewport>
//           <Select.Group>
//             <Select.Label className={'SelectLabel'}>Numbers</Select.Label>
//             {/*{data.map(el => (*/}
//             {/*  <Select.Item key={data[0] + 1} value={el}>*/}
//             {/*    {el}*/}
//             {/*  </Select.Item>*/}
//             {/*))}*/}
//             <Select.Item value={'2'}>2</Select.Item>
//             <Select.Item value={'2'}>2</Select.Item>
//           </Select.Group>
//           <Select.Separator className={'SelectSeparator'} />
//         </Select.Viewport>
//         <Select.ScrollDownButton className={'SelectScrollButton'}>
//           <ChevronDownIcon />
//         </Select.ScrollDownButton>
//         <Select.Arrow />
//       </Select.Content>
//     </Select.Portal>
//   </Select.Root>
// )
//   const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
//     return (
//       <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
//         <Select.ItemText>{children}</Select.ItemText>
//         <Select.ItemIndicator className={'SelectItemIndicator'}>
//           <CheckIcon />
//         </Select.ItemIndicator>
//       </Select.Item>
//     )
//   })
// }
//
// export default SelectDemo
import React from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'

import s from './select.module.scss'

type PropsType = {
  category?: string
  data: string[]
  description: string
}

const SelectDemo = ({ category, data, description }: PropsType) => (
  <Select.Root>
    <Select.Trigger aria-label={'Food'} className={'SelectTrigger'}>
      <Select.Value placeholder={description} />
      <Select.Icon className={s.SelectIcon}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className={'SelectContent'}>
        <Select.ScrollUpButton className={'SelectScrollButton'}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={'SelectViewport'}>
          <Select.Group>
            <Select.Label className={'SelectLabel'}>{category ? category : ''}</Select.Label>
            {data.map(el => (
              <SelectItem value={el}>{el}</SelectItem>
            ))}

            {/*<SelectItem value={'banana'}>Banana</SelectItem>*/}
            {/*<SelectItem value={'blueberry'}>Blueberry</SelectItem>*/}
            {/*<SelectItem value={'grapes'}>Grapes</SelectItem>*/}
            {/*<SelectItem value={'pineapple'}>Pineapple</SelectItem>*/}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={'SelectScrollButton'}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className={'SelectItemIndicator'}>
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})

export default SelectDemo
