import { useEffect } from 'react'
import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './loginForm.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    setError('email', {
      message: 'Dont Forget Your Username Should Be Cool!',
      type: 'manual',
    })
  }, [setError])
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    name: 'rememberMe',
  })

  const onSubmit = (data: FormValues) => {
    console.log(data, 'data')
  }

  console.log(errors.email)
  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={'email'}>Email:</label>
      <input type={'email'} {...register('email')} className={s.textField} />

      <span style={{ color: 'red' }}>{errors.email?.message}</span>
      <label htmlFor={'password'}>Password:</label>
      <input type={'password'} {...register('password')} className={s.textField} />
      <span style={{ color: 'red' }}>{errors.password?.message}</span>

      <label>
        <input type={'checkbox'} {...field} checked={value} onChange={onChange} />
        remember me
      </label>
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
