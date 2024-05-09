import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import SelectDemo from '@/components/ui/select/select'

export function App() {
  return (
    <div>
      <Card>
        <Button>asdfadsf</Button>
      </Card>

      <SelectDemo
        category={'category'}
        data={['sdfsd', 'sdgfsd', '23234', 's34sr5re5df']}
        description={'what select'}
      />
    </div>
  )
}
