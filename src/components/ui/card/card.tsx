import { ComponentPropsWithRef, ReactNode } from 'react'

import s from './card.module.scss'

type Props = {
  children?: ReactNode
} & ComponentPropsWithRef<'div'>

export const Card = ({ children, ...rest }: Props) => {
  return (
    <div className={s.box} {...rest}>
      {children}
    </div>
  )
}
