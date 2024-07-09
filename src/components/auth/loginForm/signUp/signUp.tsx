import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormTextField } from '@/components/ui/form/formTextField'
import { Typography } from '@/components/ui/typography/typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../loginForm.module.scss'

const loginSchema = z
  .object({
    confirmPassword: z.string(),
    email: z.string().trim().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // указывает путь к полю, к которому будет относиться ошибка
  })

export type SignUpFormValues = z.infer<typeof loginSchema>

type Props = {
  buttonName: string
  onSignIn: () => void
  onSubmit: (values: SignUpFormValues) => void
}

export const SignUp = ({ buttonName, onSignIn, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      {import.meta.env.DEV && <DevTool control={control} />}
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Typography.H2>Sign Up</Typography.H2>
        <fieldset className={s.loginFieldSet}>
          <FormTextField
            className={s.textField}
            control={control}
            label={'Email'}
            name={'email'}
            type={'email'}
          />
          <FormTextField
            className={s.textField}
            control={control}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <FormTextField
            className={s.textField}
            control={control}
            label={'Confirm Password'}
            name={'confirmPassword'}
            type={'password'}
          />
        </fieldset>
        <Button fullWidth type={'submit'}>
          {buttonName}
        </Button>
        <span>Already have an account?</span>
        <Button className={s.loginBtn} onClick={onSignIn} type={'button'}>
          Sign In
        </Button>
      </form>
    </>
  )
}
