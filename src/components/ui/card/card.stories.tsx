import { Card } from '@/components/ui/card/card'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    style: {
      height: '500px',
    },
  },
}
export const WithChild: Story = {
  args: {
    children: (
      <div style={{ alignItems: 'center', display: 'flex', fontWeight: 'bold', height: '300px' }}>
        I'm child component Card
      </div>
    ),
  },
}
