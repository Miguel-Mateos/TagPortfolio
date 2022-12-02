export const getReadme = async (state: any) => {
  const readme = await fetch(
    `https://raw.githubusercontent.com/${state.owner}/${state.repo}/${state.branch}/README.md`
  )
  return await readme.text()
}
