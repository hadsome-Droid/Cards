import { useState } from 'react'

import { Auth } from '@/components/auth/auth'
import { Card } from '@/components/ui/card/card'

import { Header } from '@/components/ui/header'

import { CheckBox } from '@/components/ui/checkBox/checkBox'

import { Input } from '@/components/ui/input'

export function App() {
  const [input, setInput] = useState<string>('')

  return (
    <div>

      <Header />
      <Button onClick={() => setTestButton(testButton + 1)} variant={'secondary'}>
        Secondary {testButton}
      </Button>
      <Button disabled hasImage onClick={() => setTestButton(testButton + 1)} variant={'secondary'}>
        Disabled {testButton}
      </Button>
      <br />

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

      <br />
      <Input
        className={'default'}
        name={'wef'}
        onChange={(e: string) => {
          setInput(e)
        }}
        type={'text'}
        value={input}
      />
      <br />


      <Card>
        <CheckBox disabled label={'Accept terms and conditions.'} />
      </Card>
    </div>
  )
}
