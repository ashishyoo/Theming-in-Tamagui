import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useThemeContext } from 'app/provider/ThemeContext'
import { useRouter } from 'solito/navigation'

export function UserDetailScreen({ id }: { id: string }) {
  const router = useRouter()
  const { variant } = useThemeContext()

  if (!id) {
    return null
  }
  return (
    <YStack flex={1} justify="center" items="center" gap="$4" bg="$background" theme={variant}>
      <Paragraph text="center" fontWeight="700">{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
    </YStack>
  )
}
