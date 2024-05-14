import type { Meta, StoryObj } from '@storybook/react'

import { CustomSelect } from './select'

const meta = {
  argTypes: {
    onChange: { action: 'changed' },
  },
  component: CustomSelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof CustomSelect>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultState: Story = {
  args: {
    onChange: () => {},
    value: 10,
  },
}
