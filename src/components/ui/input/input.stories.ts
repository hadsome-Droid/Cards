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
// import { Meta, Story } from '@storybook/react';
// import { Input, PropsType} from '../input/input';
//
// export default {
//   title: 'Components/Input',
//   component: Input,
//   argTypes: {
//     className: {
//       control: { type: 'select', options: ['active', 'default', 'error', null] },
//     },
//     type: {
//       control: { type: 'select', options: ['date', 'email', 'number', 'password', 'text'] },
//     }
//   }
// } satisfies Meta<typeof Input>
//
// const Template: Story<PropsType> = (args: any) => <Input {...args}/>
//
//
// export const Default = Template.bind({});
// Default.args = {
//   className: 'default',
//   name: 'default',
//   onChange: (e) => console.log(e),
//   type: 'text',
//   value: '',
// };
//
// export const Active = Template.bind({});
// Active.args = {
//   className: 'active',
//   name: 'active',
//   onChange: (e) => console.log(e),
//   type: 'text',
//   value: 'Active',
// };
//
// export const Error = Template.bind({});
// Error.args = {
//   className: 'error',
//   name: 'error',
//   onChange: (e) => console.log(e),
//   type: 'text',
//   value: 'Error',
// };
