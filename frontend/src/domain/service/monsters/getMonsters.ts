export const getMonsters = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}
