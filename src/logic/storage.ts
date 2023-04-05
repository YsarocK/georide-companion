import { useStorageLocal } from '~/composables/useStorageLocal'

export const email = useStorageLocal('georide-companion-email', '')
export const token = useStorageLocal('georide-companion-token', '')
