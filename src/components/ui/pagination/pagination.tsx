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

  const maxVisiblePages = 3

  const pageNumbers = useMemo(() => {
    const numbers = [1]

    console.log(numbers)
    if (activePage > maxVisiblePages + 1) {
      numbers.push(-1)
    }
    for (let i = Math.max(2, activePage - 1); i <= Math.min(activePage + 1, totalPages - 1); i++) {
      numbers.push(i)
    }
    if (activePage < totalPages - maxVisiblePages) {
      numbers.push(-2)
    }
    if (totalPages > 1) {
      numbers.push(totalPages)
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

// import React, { useMemo, useState } from 'react'
//
// import s from './pagination.module.scss'
//
// type Props = {
//   needToShowItems: number
//   totalItems: number
// }
//
// export const Pagination = ({ needToShowItems, totalItems }: Props) => {
//   const [activePage, setActivePage] = useState(1)
//
//   const totalPages = Math.ceil(totalItems / needToShowItems)
//   const pageNumbers = useMemo(() => {
//     const numbers = []
//
//     for (let i = 1; i <= totalPages; i++) {
//       numbers.push(i)
//     }
//
//     return numbers
//   }, [totalPages])
//
//   const handleClick = (number: number) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     e.preventDefault()
//     setActivePage(number)
//   }
//
//   const decrementHandler = () => {
//     if (activePage > 1) {
//       setActivePage(activePage - 1)
//     }
//   }
//
//   const incrementHandler = () => {
//     if (activePage < totalPages) {
//       setActivePage(activePage + 1)
//     }
//   }
//
//   return (
//     <div className={s.box}>
//       <ul className={s.pagination}>
//         <button onClick={decrementHandler}>{'<'}</button>
//         {pageNumbers.map(number => (
//           <li className={`${s.pageItem} ${number === activePage ? s.activePage : ''}`} key={number}>
//             <a className={s.pageLink} href={'!#'} onClick={handleClick(number)}>
//               {number}
//             </a>
//           </li>
//         ))}
//         <button onClick={incrementHandler}>{'>'}</button>
//       </ul>
//       <div className={s.selectBox}>
//         <p>
//           Показать на <span>Тут должен быть Select =)</span> странице
//         </p>
//       </div>
//     </div>
//   )
// }
