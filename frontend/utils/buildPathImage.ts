export const buildPathImage = (name: string) => {
  let tempName = ''
  const elements = [
    'fuego',
    'agua',
    'rayo',
    'hielo',
    'draco',
    'veneno',
    'aturdimiento',
    'sueño',
    'parálisis',
    'nitro',
    'sangrado',
    'defensa',
    'sueno',
    'paralisis',
    'viento',
  ]

  elements.forEach((element) => {
    if (name.toLowerCase().includes(element)) {
      tempName = element
      if (name === 'sueno') {
        tempName = 'sueño'
      }
      if (name === 'paralisis') {
        tempName = 'parálisis'
      }
    }
  })
  return `/img/icons/${tempName}.svg`
}
