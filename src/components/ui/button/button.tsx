import { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode, forwardRef } from 'react'

import { ArrowLogOut } from '@/assets/icons/components/arrowLogOut/arrowLogOut'

import s from './button.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const {
      as: Component = 'button',
      children,
      className,
      fullWidth,
      variant = 'primary',
      ...rest
    } = props

    return (
      <Component
        className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        ref={ref}
        {...rest}
      >
        <ArrowLogOut size={16} />
        {children}
      </Component>
    )
  }
)
