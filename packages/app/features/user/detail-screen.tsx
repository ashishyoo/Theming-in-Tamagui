import { Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useRouter } from 'solito/navigation'
import { useVariantContext } from 'app/provider/VariantContext'

export function UserDetailScreen({ id }: { id: string }) {
  const router = useRouter()
  const { variant } = useVariantContext()

  if (!id) {
    return null
  }
  return (
    <YStack flex={1} justify="center" items="center" gap="$4" bg="$background" theme={variant}>
      <Paragraph text="center" fontWeight="700" color="$blue10">{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} onPress={() => router.back()}>
        Go Home
      </Button>
    </YStack>
  )
}
