export const Notification = () => {
  const notificationTest = () => {
    // Notification.requestPermission().then((result) => {
    //   const notification = new Notification('Title', {
    //     body: 'Lorem Ipsum Dolor Sit Amet',
    //     data: { hello: 'world' },
    //     icon: 'https://tag-ds.vercel.app/logo.png',
    //     tag: 'test'
    //   })
    //   notification.onclick = (e) => {
    //     window.open('https://google.com', '_blank')
    //   }
    // })
  }
  return (
    <div>
      <button onClick={notificationTest}>Notification Test</button>
    </div>
  )
}
