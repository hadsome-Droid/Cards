import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './signIn'

const meta = {
  argTypes: {
    buttonName: {
      value: 'Sign Up',
    },
    onSubmit: () => {},
  },
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    buttonName: 'Sign In',
    onSignUp: () => {},
    onSubmit: () => {},
  },
}
