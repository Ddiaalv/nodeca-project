import { styleGuide } from '../../../../utils/styleGuide'

export const setColor = (name: string): string => {
  let menuName = ''
  if (name.toLowerCase() === 'inicio') {
    menuName = styleGuide.color.pink.light
  }
  if (name.toLowerCase() === 'monstruos') {
    menuName = styleGuide.color.yellow.light
  }
  return menuName
}
