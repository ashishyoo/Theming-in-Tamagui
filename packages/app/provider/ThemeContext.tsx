import { createContext, useContext, useState, useEffect } from 'react'
import { useColorScheme, Platform } from 'react-native'
import { useRootTheme } from '@tamagui/next-theme'

interface ThemeContextType {
  theme: string
  toggleTheme: () => void
  variant: ThemeName
  setVariant: (variant: 'red' | 'blue' | 'green' | 'yellow') => void
}

type ThemeName = 'red' | 'blue' | 'green' | 'yellow' | null

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme()
  const isWeb = Platform.OS === 'web'
  const [rootTheme, setRootTheme] = isWeb ? useRootTheme() : [null, () => {}]
  const [theme, setTheme] = useState(colorScheme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    if (isWeb) {
      setTheme(rootTheme || 'light')
    } else {
      setTheme(colorScheme === 'dark' ? 'dark' : 'light')
    }
    console.log(rootTheme, theme, colorScheme)
  }, [colorScheme, rootTheme, isWeb])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    if (isWeb) {
      setRootTheme(nextTheme)
    }
  }

  const [variant, setVariant] = useState<ThemeName>(null)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, variant, setVariant }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
