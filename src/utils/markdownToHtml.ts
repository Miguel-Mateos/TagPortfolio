
export const mdToHTML = (md: string) => {
  let finalContent: any = []
  // transform md to html
  const title = /(?<=# ).*/g
  const bold = /(?<=\*\*).*(?=\*\*)/g
  const italic = /(?<=\*).*(?=\*)/g
  const code = /(?<=`).*?(?=`)/g

  let array = Array.from(md.split('\n'))
  array = array.filter(str => {
    return /\S/.test(str);
  });

  console.log(md)

  array.forEach((el) => {
    if (el.match(title)) finalContent.push({ element: 'h2', content: el.match(title)?.toString()})
    // if its not title or bold or italic or code
    else if (!el.match(bold) && !el.match(italic) && !el.match(code)) finalContent.push({ element: 'p', content: el })
    else if (el.match(bold)) finalContent.push({ element: 'b', content: el.match(bold)})
    else if (el.match(italic)) finalContent.push({ element: 'i', content: el.match(italic)})
    else if (el.match(code)) finalContent.push({ element: 'code', content: el.match(code)})
    else finalContent.push(el)
  })
  
  console.log(finalContent)

  return finalContent

}
