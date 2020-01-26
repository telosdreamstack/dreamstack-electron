import React from 'react'
import { render } from 'react-dom'

import App from './App'

render(
  // <AppContainer>
  <App />,
  // </AppContainer>,
  document.getElementById('root'),
)

// if ((module as any).hot) {
//   render(
//     <AppContainer>
//       <App />
//     </AppContainer>,
//     document.getElementById('root'),
//   )
// }
