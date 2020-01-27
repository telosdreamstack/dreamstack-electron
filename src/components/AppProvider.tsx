/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from 'theme'

// does not currently work with MDX v1
// import { importMDX } from 'mdx.macro'
// const Demo = importMDX.sync('./demo.mdx')

type AppProviderProps = {
  children: JSX.Element
}
export default function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
