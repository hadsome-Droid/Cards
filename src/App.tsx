import { useState } from 'react'

import { LoginForm } from '@/components/auth/loginForm/loginForm'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/pagination'

export function App() {
  const [input, setInput] = useState<string>('')
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [testButton, setTestButton] = useState(0)

  return (
    <div>
      <Button onClick={() => setTestButton(testButton + 1)} variant={'secondary'}>
        Secondary {testButton}
      </Button>
      <Button disabled hasImage onClick={() => setTestButton(testButton + 1)} variant={'secondary'}>
        Disabled {testButton}
      </Button>
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
        <Button hasImage onClick={() => setTestButton(testButton + 1)}>
          Primary {testButton}
        </Button>
        <Button disabled onClick={() => setTestButton(testButton + 1)}>
          Disabled {testButton}
        </Button>
      </Card>
      <Pagination
        needToShowItems={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
        totalItems={100}
      />

      <LoginForm />
    </div>
  )
}
