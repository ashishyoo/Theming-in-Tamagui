import { Toast, useToastState } from '@tamagui/toast'
import { YStack } from 'tamagui'
import { useVariantContext } from 'app/provider/VariantContext'

export const NativeToast = () => {
  const currentToast = useToastState()
  const { variant } = useVariantContext()

  if (!currentToast || currentToast.isHandledNatively) {
    return null
  }

  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      viewportName={currentToast.viewportName}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
      theme={variant}
    >
      <YStack py="$1.5" px="$2">
        <Toast.Title lineHeight="$1">{currentToast.title}</Toast.Title>
        {!!currentToast.message && <Toast.Description>{currentToast.message}</Toast.Description>}
      </YStack>
    </Toast>
  )
}
