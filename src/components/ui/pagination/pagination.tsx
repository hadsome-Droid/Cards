import { MouseEvent, useMemo, useState } from 'react'

import s from './pagination.module.scss'

type Props = {
  needToShowItems: number
  totalItems: number
}

export const Pagination = ({ needToShowItems, totalItems }: Props) => {
  const [activePage, setActivePage] = useState(1)

  const totalPages = Math.ceil(totalItems / needToShowItems)

  const handleClick = (number: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActivePage(number)
  }

  const decrementHandler = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1)
    }
  }

  const incrementHandler = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1)
    }
  }

  const pageNumbers = useMemo(() => {
    const numbers = [1]

    if (totalPages > 5) {
      if (activePage === 1 || activePage === 2) {
        for (let i = 2; i <= 5; i++) {
          numbers.push(i)
        }
        numbers.push(-2, totalPages)
      } else if (activePage === totalPages - 1 || activePage === totalPages) {
        numbers.push(-1)
        for (let i = totalPages - 3; i <= totalPages; i++) {
          numbers.push(i)
        }
      } else {
        numbers.push(-1)
        for (let i = activePage - 1; i <= activePage + 1; i++) {
          numbers.push(i)
        }
        numbers.push(-2, totalPages)
      }
    } else {
      for (let i = 2; i <= totalPages; i++) {
        numbers.push(i)
      }
    }

    return numbers
  }, [activePage, totalPages])

  return (
    <div className={s.box}>
      <ul className={s.pagination}>
        <button onClick={decrementHandler}>{'<'}</button>
        {pageNumbers.map(number =>
          number >= 0 ? (
            <li
              className={`${s.pageItem} ${number === activePage ? s.activePage : ''}`}
              key={number}
            >
              <a className={s.pageLink} href={'!#'} onClick={handleClick(number)}>
                {number}
              </a>
            </li>
          ) : (
            <li key={number}>...</li>
          )
        )}
        <button onClick={incrementHandler}>{'>'}</button>
      </ul>
      <div className={s.selectBox}>
        <p>
          Показать на <span>Тут должен быть Select =)</span> странице
        </p>
      </div>
    </div>
  )
}
