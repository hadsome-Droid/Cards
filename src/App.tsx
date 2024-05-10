import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card/card'
import { Pagination } from '@/components/ui/pagination/pagination'


export function App() {
  const [input, setInput] = useState<string>('')

  return (
    <div>
      sdf

      <Button variant={'secondary'}>asdfadsf</Button>
      <Button as={'a'} children={'wdreras'} href={'wdreras'} variant={'primary'} />
      <Input
        className={'error'}
        name={'wef'}
        onChange={(e: string) => {
          setInput(e)
        }}
        type={'text'}
        value={input}
      />

      <Card>
        <Button>asdfadsf</Button>
      </Card>
      <Pagination needToShowItems={5} totalItems={50} />
    </div>
  )
}
