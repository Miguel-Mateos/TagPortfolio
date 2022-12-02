export const headerRenderer = (text: string, level: 2 | 1 | 3 | 4 | 5 | 6) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
  if (level === 2) {
    return `<div class="study-img-container" data-title=${text}>
        <img
          class="study-img-title"
          src="https://picsum.photos/650"
          alt=${text}
        />
      </div>`
  } else return `<h${level} id="${escapedText}">${text}</h${level}>`
}
