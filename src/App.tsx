import { useState } from 'react'

import { Auth } from '@/components/auth/auth'
import { Input } from '@/components/ui/input'

export function App() {
  const [input, setInput] = useState<string>('')

  return (
    <div>
      <Auth />

      <Input
        className={'error'}
        name={'wef'}
        onChange={(e: string) => {
          setInput(e)
        }}
        type={'password'}
        value={input}
      />
    </div>
  )
}
