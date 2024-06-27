import { useState } from 'react'

import { Decks } from '@/pages/decks/decks'
import { useGetDecksQuery } from '@/services/flashcards-api'

const DecksPage = () => {
  const [search, setSearch] = useState('')
  const { data, error, isLoading } = useGetDecksQuery({
    name: search,
  })

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
      </div>
    </div>
  )
}

export default DecksPage
