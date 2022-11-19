export function tmpSort(list: { name: string }[]) {
  return list.sort((a, b) => {
    if (a.name === 'weather-hackaton') return -1
    if (b.name === 'weather-hackaton') return 1
    if (a.name === 'portfolio') return -1
    if (b.name === 'portfolio') return 1
    if (a.name === 'BidsSocket') return -1
    if (b.name === 'BidsSocket') return 1
    return 0
  })
}
