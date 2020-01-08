import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import FooReact, { hook } from 'foo'

console.log('main', React)
console.log(FooReact === React)

const store = createStore(state => state, {})

const App = () => {
  const hookResult = hook()
  console.log(hookResult)
  return (
    <>
      test
    </>
  )
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
