import { MouseEvent, useMemo } from 'react'

import { ArrowBack } from '@/assets/icons/components/arrowBack/arrowBack'
import { ArrowForward } from '@/assets/icons/components/arrowForward/arrowForward'
import { CustomSelect } from '@/components/ui/select'

import s from './pagination.module.scss'

type Props = {
  activePage?: number
  needToShowItems?: number | undefined
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
  totalPages,
}: Props) => {
  // const [activePage, setActivePage] = useState(1)

  // const totalPages = Math.ceil(totalItems / needToShowItems)

  const checkActivePage = activePage ? activePage : 1
  const checkTotalPages = totalPages ? totalPages : 1
  const checkNeedToShowItems = needToShowItems ? needToShowItems : 10

  const handleClick = (number: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActivePage(number)
  }

  const decrementHandler = () => {
    if (checkActivePage > 1) {
      setActivePage(checkActivePage - 1)
    }
  }

  const incrementHandler = () => {
    if (checkActivePage < checkTotalPages) {
      setActivePage(checkActivePage + 1)
    }
  }

  const pageNumbers = useMemo(() => {
    const numbers = [1]

    if (checkTotalPages > 5) {
      if (checkActivePage === 1 || checkActivePage === 2 || checkActivePage === 3) {
        for (let i = 2; i <= 5; i++) {
          numbers.push(i)
        }
        numbers.push(-2, checkTotalPages)
      } else if (
        checkActivePage === checkTotalPages - 1 ||
        checkActivePage === checkTotalPages - 2 ||
        checkActivePage === checkTotalPages
      ) {
        numbers.push(-1)
        for (let i = checkTotalPages - 3; i <= checkTotalPages; i++) {
          numbers.push(i)
        }
      } else {
        numbers.push(-1)
        for (let i = checkActivePage - 1; i <= checkActivePage + 1; i++) {
          numbers.push(i)
        }
        numbers.push(-2, checkTotalPages)
      }
    } else {
      for (let i = 2; i <= checkTotalPages; i++) {
        numbers.push(i)
      }
    }

    return numbers
  }, [checkActivePage, checkTotalPages])

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
          value={checkNeedToShowItems}
        />
        <span> на странице</span>
      </div>
    </div>
  )
}
