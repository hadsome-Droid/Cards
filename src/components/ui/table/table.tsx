import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

type TableComponentProps<T extends ElementType = 'table'> = {
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

const Root = ({ className, ...rest }: TableComponentProps) => {
  const classes = clsx(s.root, className)

  return <table className={classes} {...rest} />
}

const Head = ({ className, ...rest }: TableComponentProps<'thead'>) => {
  const classes = clsx(s.root, className)

  return <thead className={classes} {...rest} />
}

const Body = ({ className, ...rest }: TableComponentProps<'tbody'>) => {
  const classes = clsx(s.root, className)

  return <tbody className={classes} {...rest} />
}

const HeadCell = ({ className, ...rest }: TableComponentProps<'th'>) => {
  const classes = clsx(s.root, className)

  return <th className={classes} {...rest} />
}

const Cell = ({ className, ...rest }: TableComponentProps<'td'>) => {
  const classes = clsx(s.root, className)

  return <td className={classes} {...rest} />
}

const Row = ({ className, ...rest }: TableComponentProps<'tr'>) => {
  const classes = clsx(s.root, className)

  return <tr className={classes} {...rest} />
}

const Empty = ({ className, ...rest }: TableComponentProps<'div'>) => {
  const classes = clsx(s.root, className)

  return <div className={classes} {...rest} />
}

export const Table = { Body, Cell, Empty, Head, HeadCell, Root, Row }
