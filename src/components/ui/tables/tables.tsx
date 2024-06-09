import { Edit } from '@/assets/icons/components/edit/edit'
import { PlayCircle } from '@/assets/icons/components/playCircle/playCircle'
import { Trash } from '@/assets/icons/components/trash/trash'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table/table'

import s from './tables.module.scss'

export const Tables = () => {
  const HeaderList = ['Name', 'Cards', 'Last Updated', 'Create By', '']
  const BodyList = [
    { createBy: 'Ivan Ivanov', lastUpdated: '18.01.2023', packName: 'Pack Name', totalCard: '4' },
    { createBy: 'Peter Petrov', lastUpdated: '13.02.2010', packName: 'Pack Name', totalCard: '6' },
    { createBy: 'Oleg Olegov', lastUpdated: '16.03.2022', packName: 'Pack Name', totalCard: '3' },
    { createBy: 'Vlad Vladov', lastUpdated: '11.06.2021', packName: 'Pack Name', totalCard: '7' },
    {
      createBy: 'Donald Donaldov',
      lastUpdated: '12.08.2020',
      packName: 'Pack Name',
      totalCard: '2',
    },
  ]

  return (
    <Table.Root className={s.Root}>
      <Table.Head>
        <Table.Row>
          {HeaderList.map(el => (
            <Table.HeadCell className={s.HeadCell} key={el}>
              {el}
            </Table.HeadCell>
          ))}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {BodyList.map((el, index) => (
          <Table.Row className={s.Row} key={index}>
            <Table.Cell className={s.Cell}>{el.packName}</Table.Cell>
            <Table.Cell className={s.Cell}>{el.totalCard}</Table.Cell>
            <Table.Cell className={s.Cell}>{el.lastUpdated}</Table.Cell>
            <Table.Cell className={s.Cell}>{el.createBy}</Table.Cell>
            <Table.Cell className={`${s.Last}`}>
              <Button className={s.Play}>
                <PlayCircle size={25} />
              </Button>
              <Button className={s.Edit}>
                <Edit size={25} />
              </Button>
              <Button className={s.Trash}>
                <Trash size={25} />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
