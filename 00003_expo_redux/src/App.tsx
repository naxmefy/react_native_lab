import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'

import { store } from './redux/store'
import { CounterView } from './views/CounterView'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <CounterView />
      </PaperProvider>
    </StoreProvider>
  )
}
