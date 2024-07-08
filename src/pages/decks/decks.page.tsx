import { useState } from 'react'

import { Pagination } from '@/components/ui/pagination/pagination'
import { Decks } from '@/pages/decks/decks'
import { useGetDecksQuery } from '@/services/flashcards-api'

const DecksPage = () => {
  const [search, setSearch] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: activePage,
    itemsPerPage: itemsPerPage,
    name: search,
  })

  console.log(data)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {JSON.stringify(error)}</h1>
  }

  return (
    <div>
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Search:
          <input
            onChange={event => setSearch(event.currentTarget.value)}
            style={{ color: 'black', padding: '4px' }}
            type={'text'}
            value={search}
          />
        </label>
        <Decks decks={data?.items} />
        <Pagination
          activePage={data?.pagination.currentPage}
          changeActivePage={setActivePage}
          needToShowItems={data?.pagination.itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          totalItems={data?.pagination.totalItems}
          totalPages={data?.pagination.totalPages}
        />
      </div>
    </div>
  )
}

export default DecksPage
