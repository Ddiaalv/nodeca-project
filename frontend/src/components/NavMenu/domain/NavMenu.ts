import { styleGuide } from '../../../../utils/styleGuide'

export const setColor = (name: string): string => {
  let menuName = ''
  if (name.toLowerCase() === 'inicio') {
    menuName = styleGuide.color.pink.gradient
  }
  if (name.toLowerCase() === 'monstruos') {
    menuName = styleGuide.color.yellow.gradient
  }
  return menuName
}
