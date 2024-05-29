import { useState } from 'react'

import { Auth } from '@/components/auth/auth'
import { Card } from '@/components/ui/card/card'
import { CheckBox } from '@/components/ui/checkBox/checkBox'
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
      <Card>
        <CheckBox />
      </Card>
    </div>
  )
}
