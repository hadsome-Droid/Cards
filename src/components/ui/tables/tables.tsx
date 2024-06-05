import s from './tables.module.scss'

export const Tables = () => {
  const HeaderList = ['Name', 'Cards', 'Last Updated', 'Create By']
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
    <div className={s.Tbox}>
      <div className={`${s.Thead} ${s.Head}`}>
        {HeaderList.map(
          el => (
            <div className={s.Item} key={el}>
              {el}
            </div>
          )
          // <div className={s.test} key={el.id}>
          //   <div className={s.TheadItem}>{el.name}</div>
          //   <div className={s.TheadItem}>{el.cards}</div>
          //   <div className={s.TheadItem}>{el.lastUpdated}</div>
          //   <div className={s.TheadBigItem}>{el.createBy}</div>
          // </div>
        )}
      </div>
      <div>
        {BodyList.map((el, index) => (
          <div className={s.Thead} key={index}>
            <div className={s.Item}>{el.packName}</div>
            <div className={s.Item}>{el.totalCard}</div>
            <div className={s.Item}>{el.lastUpdated}</div>
            <div className={s.Item}>{el.createBy}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
