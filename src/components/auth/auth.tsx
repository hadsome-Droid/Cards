import { useState } from 'react'

import { FormValues, LoginForm } from '@/components/auth/loginForm/loginForm'
import { Card } from '@/components/ui/card/card'

export const Auth = () => {
  const [dataTest, setDataTest] = useState<FormValues>()

  console.log(dataTest)

  return (
    <Card>
      <LoginForm
        onSubmit={values => {
          setDataTest(values)
        }}
      />
    </Card>
  )
}
