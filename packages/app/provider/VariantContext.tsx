import { createContext, useContext, useState } from 'react'

interface VariantContextType {
  variant: string | null
  setVariant: (variant: 'red' | 'blue' | 'green' | 'yellow') => void
}

const VariantContext = createContext<VariantContextType | undefined>(undefined)

export function VariantProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<string | null>(null)

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
