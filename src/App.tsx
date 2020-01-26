/** @jsx jsx */
import { hot } from 'react-hot-loader/root'
import { jsx } from 'theme-ui'

import AppProvider from 'components/AppProvider'
import Home from 'routes/Home'

function App() {
  return (
    <div>
      <AppProvider>
        <Home />
      </AppProvider>
    </div>
  )
}

export default hot(App)
