import { Button } from '@/components/ui/button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img alt={'logo'} height={36} src={'./src/assets/images/Logo-2.png'} width={156} />
      </div>
      <div className={s.button}>
        {/*условный рэндеринг кнопка или аватарка с дропдауном при авторизации*/}
        {/*true ? avatar : button*/}
        <Button variant={'secondary'}>Sign in</Button>
      </div>
    </div>
  )
}
