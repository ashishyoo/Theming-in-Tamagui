import { createContext, useContext, useState } from 'react'

// Define the allowed theme names (adjust to match your Tamagui theme names)
type ThemeName = 'red' | 'blue' | 'green' | 'yellow' | null

interface VariantContextType {
  variant: ThemeName
  setVariant: (variant: 'red' | 'blue' | 'green' | 'yellow') => void
}

const VariantContext = createContext<VariantContextType | undefined>(undefined)

export function VariantProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<ThemeName>(null)

  return (
    <VariantContext.Provider value={{ variant, setVariant }}>{children}</VariantContext.Provider>
  )
}

export function useVariantContext() {
  const context = useContext(VariantContext)
  if (!context) {
    throw new Error('useVariantContext must be used within a VariantProvider')
  }
  return context
}
