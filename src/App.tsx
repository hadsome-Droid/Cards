import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { DropdownMenuDemo } from '@/components/ui/dropDown/dropDown'

export function App() {
  return (
    <div>
      {/*sdf*/}
      {/*<Card>*/}
      {/*  <Button>asdfadsf</Button>*/}
      {/*</Card>*/}
      <DropdownMenuDemo categoryOption={['Learn', 'Edit', 'Delete']} />
    </div>
  )
}
