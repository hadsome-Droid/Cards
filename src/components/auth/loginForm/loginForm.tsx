import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'

type FormValues = {
  email: string
  login: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, register } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type={'email'} {...register('email')} />
      </label>
      <label>
        Password
        <input type={'password'} {...register('login')} />
      </label>
      <label>
        <input type={'checkbox'} {...register('rememberMe')} />
        remember me
      </label>
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
