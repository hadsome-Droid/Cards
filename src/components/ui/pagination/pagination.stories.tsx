import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './pagination'

const meta = {
  argTypes: {
    activePage: {
      control: { type: 'number' },
      value: 1,
    },
    changeActivePage: {
      action: 'onActivePage',
    },
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
    totalPages: {
      control: { type: 'number' },
      value: 10,
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
    activePage: 1,
    changeActivePage: () => {},
    needToShowItems: 10,
    onItemsPerPageChange: () => {},
    totalItems: 100,
    totalPages: 5,
  },
  render: args => {
    const [needToShowItems, setNeedToShowItems] = useState(10)
    const [activePage, setActivePage] = useState(1)
    const checkTotalItems = args.totalItems ? args.totalItems : 50

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
      args.onItemsPerPageChange(newItemsPerPage)
      setNeedToShowItems(newItemsPerPage)
    }

    const handlerActivePage = (newActivePage: number) => {
      args.changeActivePage(newActivePage)
      setActivePage(newActivePage)
    }

    const totalPages = Math.ceil(checkTotalItems / needToShowItems)

    return (
      <Pagination
        activePage={activePage}
        changeActivePage={handlerActivePage}
        needToShowItems={needToShowItems}
        onItemsPerPageChange={handleItemsPerPageChange}
        totalItems={args.totalItems}
        totalPages={totalPages}
      />
    )
  },
}
