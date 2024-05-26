import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormCheckbox } from '@/components/ui/form/formCheckbox'
import { FormTextField } from '@/components/ui/form/formTextField'
import { Typography } from '@/components/ui/typografy/typografy'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../loginForm.module.scss'

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

export type FormValues = z.infer<typeof loginSchema>

type Props = {
  buttonName: string
  onSignUp: () => void
  onSubmit: (values: FormValues) => void
}

export const SignIn = ({ buttonName, onSignUp, onSubmit }: Props) => {
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
      {import.meta.env.DEV && <DevTool control={control} />}
      <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <Typography.H2>Sign In</Typography.H2>
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
        </fieldset>
        <FormCheckbox control={control} label={'Remember Me'} name={'rememberMe'} />
        <a className={s.forgotPassword} href={'#'}>
          Forgot Password?
        </a>
        <Button fullWidth type={'submit'}>
          {buttonName}
        </Button>
        <span>Don't have an account?</span>
        <Button className={s.loginBtn} onClick={onSignUp} type={'button'}>
          Sign Up
        </Button>
      </form>
    </>
  )
}
