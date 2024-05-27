import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '@/components/auth/loginForm/signUp/signUp'

const meta = {
  argTypes: {
    buttonName: {
      value: 'Sign Up',
    },
    onSubmit: () => {},
  },
  component: SignUp,
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    buttonName: 'Sign Up',
    onSignIn: () => {},
    onSubmit: () => {},
  },
}
