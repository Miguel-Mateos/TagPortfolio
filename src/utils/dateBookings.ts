export const dateBookings = (): any => {
  const today = new Date()
  const weekDay = today.getDay()
  const randomDay = Math.floor(Math.random() * 7)
  const tempDay = today.setDate(today.getDate() + randomDay)
  if (new Date(tempDay).getDay() <= 5)
    return new Date(tempDay).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  else return dateBookings()
}