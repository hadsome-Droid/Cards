import { MouseEvent, useMemo, useState } from 'react'

import { ArrowBack } from '@/assets/icons/components/arrowBack/arrowBack'
import { ArrowForward } from '@/assets/icons/components/arrowForward/arrowForward'
import { CustomSelect } from '@/components/ui/select'

import s from './pagination.module.scss'

type Props = {
  activePage?: number
  needToShowItems?: number
  onItemsPerPageChange: (itemsPerPage: number) => void
  setActivePage: (activePage: number) => void
  totalItems?: number
  totalPages?: number
}

export const Pagination = ({
  activePage,
  needToShowItems,
  onItemsPerPageChange,
  setActivePage,
  totalItems,
  totalPages,
}: Props) => {
  // const [activePage, setActivePage] = useState(1)

  // const totalPages = Math.ceil(totalItems / needToShowItems)
  const test = totalItems

  const handleClick = (number: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActivePage(number)
  }

  const decrementHandler = () => {
    if (activePage && activePage > 1) {
      setActivePage(activePage - 1)
    }
  }

  const incrementHandler = () => {
    if (activePage && activePage < totalPages) {
      setActivePage(activePage + 1)
    }
  }

  const pageNumbers = useMemo(() => {
    const numbers = [1]

    if (totalPages && totalPages > 5) {
      if (activePage === 1 || activePage === 2 || activePage === 3) {
        for (let i = 2; i <= 5; i++) {
          numbers.push(i)
        }
        numbers.push(-2, totalPages)
      } else if (
        activePage === totalPages - 1 ||
        activePage === totalPages - 2 ||
        activePage === totalPages
      ) {
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
        <button className={s.ArrowBtn} disabled={activePage === 1} onClick={decrementHandler}>
          <ArrowBack size={16} />
        </button>
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
        <button
          className={s.ArrowBtn}
          disabled={activePage === totalPages}
          onClick={incrementHandler}
        >
          <ArrowForward size={16} />
        </button>
      </ul>
      <div className={s.selectBox}>
        <span>Показать </span>
        <CustomSelect
          onChange={newItemsPerPage => onItemsPerPageChange(newItemsPerPage)}
          value={needToShowItems}
        />
        <span> на странице</span>
      </div>
    </div>
  )
}
