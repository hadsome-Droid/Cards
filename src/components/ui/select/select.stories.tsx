import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

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

export const DefaultSelect: Story = {
  args: {
    onChange: () => {},
    value: 10,
  },

  render: args => {
    const [defaultValue, setDefaultValue] = useState(args.value)

    return <CustomSelect onChange={setDefaultValue} value={defaultValue} />
  },
}
