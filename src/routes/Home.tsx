/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import useDemo from 'hooks/useDemo'
import DemoComponent from 'components/DemoComponent'

export default function Home() {
  const data = useDemo()
  return (
    <div>
      <Styled.h1>Home</Styled.h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <DemoComponent />
    </div>
  )
}
