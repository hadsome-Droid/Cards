import { Edit } from '@/assets/icons/components/edit/edit'
import { PlayCircle } from '@/assets/icons/components/playCircle/playCircle'
import { Trash } from '@/assets/icons/components/trash/trash'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table/table'
import {
  useCreateDeckMutation,
  useRemoveDeckMutation,
  useUpdateDeckMutation,
} from '@/services/decks/deck.service'
import { Deck } from '@/services/decks/deck.types'

import s from './desks.module.scss'

type Props = {
  decks: Deck[] | undefined
}

export const Decks = ({ decks }: Props) => {
  const HeaderList = ['Name', 'Cards', 'Last Updated', 'Create By', '']
  const [createDeck] = useCreateDeckMutation()
  const [removeDeck] = useRemoveDeckMutation()
  const [updateDeck] = useUpdateDeckMutation()

  const handlerClick = () => {
    const title = 'New Deck'

    createDeck({ name: title })
  }

  const removeHandler = (id: string) => {
    removeDeck(id)
  }

  const updateHandler = (id: string) => {
    const updateTitle = 'Update Name'

    updateDeck({ id, name: updateTitle })
  }

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
        {decks?.map(el => {
          const updatedAt = new Date(el.updated).toLocaleDateString('ru-RU')

          return (
            <Table.Row className={s.Row} key={el.id}>
              <Table.Cell className={s.Cell}>{el.name}</Table.Cell>
              <Table.Cell className={s.Cell}>{el.cardsCount}</Table.Cell>
              <Table.Cell className={s.Cell}>{updatedAt}</Table.Cell>
              <Table.Cell className={s.Cell}>{el.author.name}</Table.Cell>
              <Table.Cell className={`${s.Last}`}>
                <Button className={s.Play} onClick={handlerClick}>
                  <PlayCircle size={25} />
                </Button>
                <Button
                  className={s.Edit}
                  onClick={() => {
                    updateHandler(el.id)
                  }}
                >
                  <Edit size={25} />
                </Button>
                <Button className={s.Trash} onClick={() => removeHandler(el.id)}>
                  <Trash size={25} />
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
