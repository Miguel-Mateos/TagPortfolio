const RESUME_NAME = '' // Example of resume on public folder --> 'Resumee_2022.pdf' (Ponte las pilas)

export const handleDownloadResumee = () => {
  fetch(RESUME_NAME).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob)
      // Setting various property values
      const alink = document.createElement('a')
      alink.href = fileURL
      window.open(fileURL)
    })
  })
}
