import React from 'react'
import Main from './src/Screens/Main'
import { Provider, useDispatch } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App