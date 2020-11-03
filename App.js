import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import MainContainer from './modules/common/containers/MainContainer'

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
}
