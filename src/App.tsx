import { Provider } from 'react-redux'

import { Header } from '@/components/ui/header'
import { Router } from '@/routers/router'

import { store } from './services/store'

export function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Router />
      </div>
    </Provider>
  )
}
