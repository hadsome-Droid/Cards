import { useState } from 'react'

import { FormValues, SignIn } from '@/components/auth/loginForm/signIn/signIn'
import { SignUp, SignUpFormValues } from '@/components/auth/loginForm/signUp/signUp'
import { Card } from '@/components/ui/card/card'

export const Auth = () => {
  const [dataTest, setDataTest] = useState<FormValues>()
  const [dataTest1, setDataTest1] = useState<SignUpFormValues>()
  const [isSignIn, setIsSignIn] = useState(true)

  console.log(dataTest, '---', dataTest1)

  return (
    <Card>
      {isSignIn ? (
        <SignIn
          buttonName={'Sign In'}
          onSignUp={() => setIsSignIn(!isSignIn)}
          onSubmit={values => {
            setDataTest(values)
          }}
        />
      ) : (
        <SignUp
          buttonName={'Sign Up'}
          onSignIn={() => setIsSignIn(!isSignIn)}
          onSubmit={values => {
            setDataTest1(values)
          }}
        />
      )}
    </Card>
  )
}
