export const wait = (time: number, cb: any) => {
  setTimeout(() => {
    cb
  }, time)
}