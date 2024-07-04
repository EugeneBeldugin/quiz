import { storage } from '../api/storage.js'
import { pages } from '../data/pages.js'

export const getVariantsBranch = () => {
  const key = storage.get(3) || '18-29'
  const page = pages.find(item => item.id === 3)
  const variants = page.variants.find(item => item.value === key)
  return variants.key;
}