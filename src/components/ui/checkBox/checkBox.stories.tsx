import { CheckBox } from '@/components/ui/checkBox/checkBox'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultWithLabel: Story = {
  args: {
    label: 'Accept terms and conditions.',
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    label: 'Accept terms and conditions.',
  },
}
