export const getLanguages = async (state: any) => {
  const languages = await fetch(state.languages_url)
  return await languages.json()
}
