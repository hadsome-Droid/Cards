import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormCheckbox } from '@/components/ui/form/formCheckbox'
import { FormTextField } from '@/components/ui/form/formTextField'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// import s from './loginForm.module.scss'

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (values: FormValues) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*<label htmlFor={'email'}>Email:</label>*/}
        {/*<input type={'email'} {...register('email')} className={s.textField} />*/}
        {/*{errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}*/}
        <FormTextField control={control} name={'email'} />
        <FormTextField control={control} name={'password'} />

        {/*<label htmlFor={'password'}>Password:</label>*/}
        {/*<input type={'password'} {...register('password')} className={s.textField} />*/}
        {/*{errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}*/}

        <FormCheckbox control={control} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </>
  )
}
