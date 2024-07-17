import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { ROUTES } from '@/common/consts/routes'
import { SignIn } from '@/components/auth/loginForm/signIn/signIn'
import { SignUp } from '@/components/auth/loginForm/signUp/signUp'
import { Card } from '@/components/ui/card/card'
import {
  useAuthMeQuery,
  useCreateNewAccountMutation,
  useLoginMutation,
} from '@/services/auth/auth.service'

export const Auth = () => {
  const [createNewAccount] = useCreateNewAccountMutation()
  const [login] = useLoginMutation()
  const { data: me, isLoading } = useAuthMeQuery()

  const [isSignIn, setIsSignIn] = useState(true)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (!isLoading) {
    if (me && !('success' in me)) {
      return <Navigate to={ROUTES.base} />
    }
  }

  return (
    <Card>
      {isSignIn ? (
        <SignIn
          buttonName={'Sign In'}
          onSignUp={() => setIsSignIn(!isSignIn)}
          onSubmit={values => {
            login(values)
          }}
        />
      ) : (
        <SignUp
          buttonName={'Sign Up'}
          onSignIn={() => setIsSignIn(!isSignIn)}
          onSubmit={values => {
            createNewAccount(values)
          }}
        />
      )}
    </Card>
  )
}
