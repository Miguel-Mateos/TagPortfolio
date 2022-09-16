export const testid = (id: any, plus?: string) => {
  if (typeof id !== 'string') throw new Error('id must be a string')
  if (plus && typeof plus !== 'string') throw new Error('plus must be a string')
  return `${id}-${plus || ''}`
}