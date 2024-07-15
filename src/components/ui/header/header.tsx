import { ROUTES } from '@/common/consts/routes'
import { Button } from '@/components/ui/button'
// import { DropdownMenuDemo } from '@/components/ui/dropDown'
import { router } from '@/routers/router'
import { useAuthMeQuery, useLogOutMutation } from '@/services/auth/auth.service'

import s from './header.module.scss'

export const Header = () => {
  const { data: me, isLoading } = useAuthMeQuery()
  const [logOut] = useLogOutMutation()

  if (isLoading) {
    return console.log('Loading...')
  }
  // const menuList = ['start', 'hello', 'end']

  const handlerLink = () => {
    return router.navigate(ROUTES.login)
  }

  const logoutHandler = () => {
    return logOut()
  }

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img alt={'logo'} height={36} src={'./src/assets/images/Logo-2.png'} width={156} />
      </div>
      <div className={s.button}>
        {/*условный рэндеринг кнопка или аватарка с дропдауном при авторизации*/}
        {/*true ? avatar : button*/}
        {me && !('success' in me) ? (
          // <DropdownMenuDemo categoryOption={menuList} nameOfCategory={'profile'} />
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '20px',
              justifyContent: 'space-between',
            }}
          >
            <h4>{me.name}</h4>
            <Button onClick={logoutHandler}> Logout </Button>
          </div>
        ) : (
          <Button onClick={handlerLink} variant={'secondary'}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  )
}
