/** @jsx jsx */
import { jsx } from 'theme-ui'
import ErrorBoundary from 'react-error-boundary'
const { Text } = require('@theme-ui/components') // type wip https://git.io/JeQGL

const myErrorHandler = (error: Error, componentStack: string) => {
  console.log({ error, componentStack }) // eslint-disable-line
  // Do something with the error
  // E.g. log to an error logging client here
}

export default function DemoComponent() {
  return (
    <ErrorBoundary onError={myErrorHandler}>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
          color: 'secondary',
        }}
      >
        I'm ThemeUI Text component in the DemoComponent
      </Text>
    </ErrorBoundary>
  )
}
