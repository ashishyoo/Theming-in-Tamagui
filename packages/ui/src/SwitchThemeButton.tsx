import { Button, XStack } from 'tamagui'
import { useThemeContext } from 'app/provider/ThemeContext'
import { useVariantContext } from 'app/provider/VariantContext'

export const SwitchThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext()
  const { setVariant } = useVariantContext()
  console.log(theme)
  return (
    <>
      <Button onPress={toggleTheme}>Mode: {theme}</Button>
      <XStack gap={'$1.5'}>
        <Button onPress={() => setVariant('red')}>Red</Button>
        <Button onPress={() => setVariant('green')}>Green</Button>
        <Button onPress={() => setVariant('blue')}>Blue</Button>
        <Button onPress={() => setVariant('yellow')}>Yellow</Button>
      </XStack>
    </>
  )
}
