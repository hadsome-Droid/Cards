import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

interface TableComponentProps<T extends keyof JSX.IntrinsicElements>
  extends ComponentPropsWithoutRef<T> {
  children?: ReactNode
  className?: string
}

const Root = ({ className, ...rest }: TableComponentProps<'table'>) => {
  const classes = clsx(s.root, className)

  return <table className={classes} {...rest} />
}

export const Table = { Root }
