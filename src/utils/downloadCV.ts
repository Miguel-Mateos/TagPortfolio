export const handleDownloadResumee = () => {
  fetch('Resumee_2022.pdf').then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob)
      // Setting various property values
      let alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'Inigo_Moreno_Resume.pdf'
      alink.click()
    })
  })
}