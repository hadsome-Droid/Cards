import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './pagination'

const meta = {
  argTypes: {
    needToShowItems: {
      control: { type: 'number' },
      value: 10,
    },
    onItemsPerPageChange: {
      action: 'itemsPerPageChanged',
    },
    totalItems: {
      control: { type: 'number' },
      value: 50,
    },
  },
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    needToShowItems: 10,
    onItemsPerPageChange: () => {},
    totalItems: 50,
  },
  render: args => {
    const [needToShowItems, setNeedToShowItems] = useState(args.needToShowItems)

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
      args.onItemsPerPageChange(newItemsPerPage)
      setNeedToShowItems(newItemsPerPage)
    }

    return (
      <Pagination
        needToShowItems={needToShowItems}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={args.totalItems}
      />
    )
  },
}

export const WithManyPages: Story = {
  args: {
    needToShowItems: 10,
    onItemsPerPageChange: () => {},
    totalItems: 500,
  },
  render: args => {
    const [needToShowItems, setNeedToShowItems] = useState(args.needToShowItems)

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
      setNeedToShowItems(newItemsPerPage)
    }

    return (
      <Pagination
        needToShowItems={needToShowItems}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={args.totalItems}
      />
    )
  },
}

export const WithCustomItemsPerPage: Story = {
  args: {
    needToShowItems: 25,
    onItemsPerPageChange: () => {},
    totalItems: 50,
  },
  render: args => {
    const [needToShowItems, setNeedToShowItems] = useState(args.needToShowItems)

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
      setNeedToShowItems(newItemsPerPage)
    }

    return (
      <Pagination
        needToShowItems={needToShowItems}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={args.totalItems}
      />
    )
  },
}
