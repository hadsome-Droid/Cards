import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  argTypes: {
    className: {
      control: { type: 'text' },
      options: ['default', 'active', 'error', 'hover', 'focus', 'disabled'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'default',
    name: 'string',
    onChange: e => console.log(e),
    type: 'text',
    value: 'initialValue',
  },
}

export const Error: Story = {
  args: {
    className: 'error',
    name: 'string',
    onChange: e => console.log(e),
    type: 'text',
    value: 'initialValue',
  },
}

export const Active: Story = {
  args: {
    className: 'active',
    name: 'string',
    onChange: e => console.log(e),
    type: 'text',
    value: 'initialValue',
  },
}
export const Disabled: Story = {
  args: {
    className: 'disabled',
    name: 'string',
    onChange: e => console.log(e),
    type: 'text',
    value: 'initialValue',
  },
}
export const Focus: Story = {
  args: {
    className: 'focus',
    name: 'string',
    onChange: e => console.log(e),
    type: 'text',
    value: 'initialValue',
  },
}
export const Hover: Story = {
  args: {
    className: 'hover',
    name: 'string',
    onChange: e => console.log(e),
    type: 'text',
    value: 'initialValue',
  },
}
