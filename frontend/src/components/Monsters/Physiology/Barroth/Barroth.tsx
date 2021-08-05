import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Barroth: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const ARM_CHECK = monster === 'Barroth'
  const HEAD_CHECK = monster === 'Deviljho' || monster === 'Deviljho Salvaje'
  const MIDDLE_HEAD_CHECK =
    monster === 'Anjanath' ||
    monster === 'Anjanath Fulgúreo' ||
    monster === 'Uragaan'
  const CHEST_CHECK =
    monster === 'Deviljho' ||
    monster === 'Deviljho Salvaje' ||
    monster === 'Uragaan'
  const TAIL_CHECK =
    monster === 'Barroth' ||
    monster === 'Anjanath' ||
    monster === 'Anjanath Fulgúreo' ||
    monster === 'Deviljho Salvaje'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="320"
      version="1.1"
      viewBox="0 0 174.281 146.803"
    >
      <defs>
        <linearGradient id="linearGradient6477">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          ></stop>
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.lightFill}
            stopOpacity="1"
          ></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient6435"
          x1="178.033"
          x2="157.766"
          y1="93.972"
          y2="96.019"
          gradientTransform="translate(-3.868 -8.093)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6477"
        />
        <linearGradient
          id="linearGradient6479"
          x1="106.939"
          x2="120.818"
          y1="94.506"
          y2="66.36"
          gradientTransform="translate(-4.308 -8.908)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6477"
        />
        <linearGradient
          id="linearGradient6427"
          x1="36.113"
          x2="34.758"
          y1="68.581"
          y2="97.28"
          gradientTransform="translate(-3.824 -11.849)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6477"
        />
        <linearGradient
          id="linearGradient6471"
          x1="87.081"
          x2="90.903"
          y1="110.055"
          y2="62.701"
          gradientTransform="translate(-4.308 -8.908)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6469"
        />
        <linearGradient id="linearGradient6469">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          ></stop>
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.darkFill}
            stopOpacity="1"
          ></stop>
        </linearGradient>
      </defs>
      <g
        id="cuerpo"
        stroke={styleGuide.color.brown.lightStroke}
        strokeLinejoin="round"
        transform="translate(-.484)"
      >
        <path
          fill={
            isWeak && CHEST_CHECK
              ? 'url(#linearGradient6479)'
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M76.07 12.922l.234 53.53L89.862 78.84l21.271-.234 13.789 14.11 9.82-.085 2.338-6.077 3.04-2.104-.235-21.74 9.35-11.454V32.323c-1.072-5.629-5.018-8.383-9.116-10.986l-13.558.935-5.61-3.507-.701-11.921c-1.37-3.29-4.13-4.728-6.779-6.312l-31.09 1.87c-3.42 2.566-5.962 5.76-6.31 10.52z"
        />
        <path
          fill="none"
          d="M84.252 36.998l.935 4.676 6.077-.468-1.636-5.143z"
        />
        <path
          fill="none"
          d="M84.018 24.376l1.87 4.908 5.142-.233-1.402-4.675z"
        />
        <path fill="none" d="M89.394 15.025l1.87 4.208 5.61-1.169-.7-3.974z" />
        <path fill="none" d="M99.68 14.558l.7 3.506h3.975l.7-5.376z" />
        <path
          fill="none"
          d="M107.393 13.155l-.467 3.974 6.311.935-.234-4.909z"
        />
        <path
          fill="none"
          d="M139.885 31.388l1.17 4.91-4.676 1.168-1.169-5.143z"
        />
        <path fill="none" d="M137.782 41.674l.935 4.207h4.908l-1.636-4.909z" />
        <path fill="none" d="M139.652 50.556l3.506-1.169v3.974l-3.039.234z" />
      </g>
      <g
        id="head"
        stroke={styleGuide.color.brown.lightStroke}
        strokeLinejoin="round"
        transform="translate(-.484)"
      >
        <path
          fill={
            isWeak && MIDDLE_HEAD_CHECK
              ? 'url(#linearGradient6427)'
              : HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M20.52 56.34h27.604c3.43.04 5.45 1.105 5.455 3.636l1.157 12.562 1.983 7.108-.661 20c-.258 2.218-.806 4.203-4.132 3.967l-45.29.165c-3.453.554-4.961-1.27-5.62-4.132l.662-14.05 7.107.166v4.958h4.298l.165-4.463 5.95-.33.496 4.793 2.975-.33v-4.463h5.29l-.166 4.793h3.14v-5.289l4.464-.165v4.297h3.801c-1.498-.569-2.209-1.452-2.148-2.644l.33-10.579-2.81.165-.496 4.794-4.297-.166v-4.628h-2.48l.166 4.959-4.959.33.165-5.62-4.628.166-.826 4.959H12.42l-.165-5.124H8.29l-1.157 4.628-5.95.661.165-11.24c-.277-3.032 1.277-3.136 2.48-3.801L14.9 65.348l.165-5.744c.262-1.957 2.7-2.865 5.455-3.264z"
          opacity="1"
        />
        <path
          stroke={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          fill="none"
          d="M14.9 65.348l23.707-.23-7.012 7.013-3.974-4.441"
          opacity="1"
        />
        <path
          stroke={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          fill="none"
          d="M53.29 78.571l-3.968-2.975h-6.776l-3.637 1.57 1.818 13.224H51.72v-9.918h-8.843v4.794h5.207l-1.736-1.736"
          opacity="1"
        />
      </g>
      <g
        stroke={
          isWeak && ARM_CHECK
            ? styleGuide.color.brown.darkStroke
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(-.484)"
      >
        <path
          fill={
            isWeak && ARM_CHECK
              ? 'url(#linearGradient6471)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M76.327 47.262l13.884.33 2.81 4.463-.33 12.893-2.645 3.967-.166 18.347H77.814l-.33 13.389-6.116-.33.496-18.017 9.421-3.637.33-5.785-5.311-6.43z"
          opacity="1"
        />
        <path
          fill={
            isWeak && ARM_CHECK
              ? 'url(#linearGradient6471)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M79.632 100.65l-.33 5.455 5.785-1.157 3.306-7.603-5.62 3.802z"
          opacity="1"
        />
        <path
          fill={
            isWeak && ARM_CHECK
              ? 'url(#linearGradient6471)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M79.798 92.717v4.959l4.297-.166 4.133-6.446z"
          opacity="1"
        />
        <path
          fill="none"
          d="M88.595 65.952l-7.898-3.399.468-9.584 4.441 6.078"
          opacity="1"
        />
      </g>
      <g
        stroke={styleGuide.color.brown.lightStroke}
        strokeLinejoin="round"
        transform="translate(-.484)"
      >
        <path
          fill={
            isWeak && TAIL_CHECK
              ? 'url(#linearGradient6435)'
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M153.075 56.306l-9.256 10.083 2.314 50.744c10.589 12.236 19.317 9.275 27.273 0l.826-58.513-15.703-9.587.166 30.91 6.446 6.942.165 14.545c-4.12 3.872-7.668 3.166-10.909 0z"
        />
        <path fill="none" d="M144.591 79.06c.35 0 9.032.65 9.032.65" />
        <path fill="none" d="M145.141 88.184l8.757-.258" />
        <path fill="none" d="M145.75 100.25l8.203-.083" />
        <path fill="none" d="M165.306 101.43l8.152 6.827" />
        <path fill="none" d="M162.385 103.559l9.99 14.56" />
        <path fill="none" d="M156.3 103.512l-9.698 13.813" />
        <path fill="none" d="M159.563 104.15l-.049 20.914" />
      </g>

      <g
        stroke={styleGuide.color.brown.darkStroke}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1.065"
        opacity="1"
        transform="translate(-4.792 -8.908)"
      >
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M76.686 22.746l.991 39.34H73.05v27.272l-1.969 3.41-7.506 2.011V64.565l-11.351-1.323.165-2.81 5.124-4.958V28.862c.7-4.148 4.236-5.461 8.43-6.116z"
        />
        <path fill="none" d="M72.719 22.746l.33 39.34-9.835-38.679" />
        <path fill="none" d="M57.677 36.052L73.05 62.085l-15.207-9.504" />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M103.775 100.302c0-.967-1.228-57.787-1.228-57.787.378-2.276.99-4.37 4.126-4.5l26.187-.861c1.844.143 3.56.543 4.175 3.142l-.154 44.654-7.651 16.675 8.264 9.09-20.826 37.026-23.472 1.157-.826-5.124 6.942-.33 1.653-2.645-8.595.991-.455-5.041 6.736-.083-6.281-3.967-1.157-7.768 13.388 8.264 13.224-18.843z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M77.163 131.046L89.23 124.6v6.777z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M73.527 138.65c2.314-.496 15.702-5.62 15.702-5.62v8.43z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M74.023 147.41l15.041-3.967-.165 6.777-10.744.661-4.463 4.298z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M133.527 122.617l5.29-9.587 2.975 11.735z"
        />
        <path
          fill="none"
          d="M129.23 101.625l-17.996-20.772-.819-32.726H129.7l-.935 36.349-12.564-12.564V55.373h9.058l-.468 15.428-3.973-4.441"
        />
      </g>
    </svg>
  )
}
