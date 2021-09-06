import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const colors = {
  primary: { text: '#E9E9EA' },
  secondary: {
    bg: '#444444',
  },
}
const styles = {
  global: () => ({
    body: {
      backgroundColor: '#171717',
    },
    _selection: {
      background: '#204961',
    },
  }),
}
const theme = extendTheme({
  config,
  colors,
  fonts: {
    body: `Poppins, ${baseTheme.fonts.body}`,
  },
  styles,
})
export default theme
