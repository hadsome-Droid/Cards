import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormCheckbox } from '@/components/ui/form/form-checkbox'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './loginForm.module.scss'

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data, 'data')
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={'email'}>Email:</label>
      <input type={'email'} {...register('email')} className={s.textField} />
      {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

      <label htmlFor={'password'}>Password:</label>
      <input type={'password'} {...register('password')} className={s.textField} />
      {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

      <FormCheckbox control={control} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
