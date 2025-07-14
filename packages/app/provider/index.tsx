import {
  TamaguiProvider,
  ToastProvider,
  CustomToast,
  isWeb,
  type TamaguiProviderProps,
} from '@my/ui'
import { config } from '@my/config/src/tamagui.config'
import { ToastViewport } from './ToastViewport'
import { ThemeProvider, useThemeContext } from './ThemeContext'
import { VariantProvider } from './VariantContext'

export function Provider({
  children,
  defaultTheme = 'dark',
  ...rest
}: Omit<TamaguiProviderProps, 'config'> & { defaultTheme?: string }) {
  return (
    <ThemeProvider>
      <VariantProvider>
        <InnerProvider defaultTheme={defaultTheme} {...rest}>
          {children}
        </InnerProvider>
      </VariantProvider>
    </ThemeProvider>
  )
}

function InnerProvider({
  children,
  defaultTheme,
  ...rest
}: Omit<TamaguiProviderProps, 'config'> & { defaultTheme?: string }) {
  const { theme } = useThemeContext()
  return (
    <TamaguiProvider config={config} defaultTheme={theme || defaultTheme} {...rest}>
      <ToastProvider swipeDirection="horizontal" duration={6000} native={isWeb ? [] : ['mobile']}>
        {children}
        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}
