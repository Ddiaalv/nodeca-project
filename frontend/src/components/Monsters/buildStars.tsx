import { Icon } from '../../styles/monsters'

export const buildStars = (stars: number) => {
  const starsComponents = []
  if (stars === 0) {
    starsComponents.push(<Icon key={1} src={`/img/icons/cross.svg`} alt="" />)
  }
  for (let index = 0; index < stars; index++) {
    starsComponents.push(
      <Icon key={index} src={`/img/icons/star.svg`} alt="" />
    )
  }
  return starsComponents
}
