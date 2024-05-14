import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/pagination'

export function App() {
  const [input, setInput] = useState<string>('')
  const [itemsPerPage, setItemsPerPage] = useState(10)

  return (
    <div>
      <Button variant={'secondary'}>asdfadsf</Button>
      <Input
        className={'error'}
        name={'wef'}
        onChange={(e: string) => {
          setInput(e)
        }}
        type={'password'}
        value={input}
      />

      <Card>
        <Button>asdfadsf</Button>
      </Card>
      <Pagination
        needToShowItems={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        totalItems={100}
      />
    </div>
  )
}
