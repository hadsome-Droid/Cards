import iconsSprite from './../../../assets/icons/icons-sprite.svg'

type Props = {
  iconId: string
    width?: string
    height?: string
    viewBox?: string
    color?: string
}

export const Icon = ({ iconId, height, viewBox, width, color}: Props) => {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox={viewBox || '0 0 24 24'}
      xmlns="http://www.w3.org/2000/svg"
      style={{fill: '#fff'}}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`}/>
    </svg>
  )
}
