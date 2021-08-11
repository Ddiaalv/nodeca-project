import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Odogaron: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const HEAD_CHECK = monster === 'Odogaron' || monster === 'Odogaron Ébano'
  const LEG_CHECK = monster === 'Odogaron' || monster === 'Odogaron Ébano'
  const TAIL_CHECK = monster === 'Odogaron' || monster === 'Odogaron Ébano'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="320"
      version="1.1"
      viewBox="0 0 173.577 155.931"
    >
      <defs>
        <linearGradient id="linearGradient3094">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.darkFill}
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="linearGradient3086">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.darkFill}
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient
          id="linearGradient3088"
          x1="-68.209"
          x2="-68.209"
          y1="-12.298"
          y2="-37.187"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3086"
        />
        <linearGradient
          id="linearGradient3096"
          x1="-16.667"
          x2="-16.667"
          y1="-97.343"
          y2="-86.759"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3094"
        />
      </defs>
      <g display="inline" transform="translate(143.1 127.407)">
        <path
          fill={
            isWeak && TAIL_CHECK
              ? 'url(#linearGradient3096)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          stroke={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          strokeLinejoin="round"
          d="M-82.445-96.765l88.594.234c4.675.623 7.792 2.493 9.35 5.61l2.104 39.037 10.986-8.882.935-30.389C28.138-113.202.255-112.679-16.058-122.01l4.675 10.286-37.4-15.194 8.414 12.856-33.894-6.311 12.155 10.986z"
          display="inline"
        />
      </g>
      <g
        stroke={
          isWeak && HEAD_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
        display="inline"
        transform="translate(143.1 127.407)"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M-142.24-20.437l6.78-6.545.7 8.649 8.884-7.948.233 7.013 6.78-6.546.467 6.312 6.779-8.182 3.74 7.948-3.974 6.078-6.078-3.974-.935 6.545-7.48-5.61-.467 6.311-8.182-6.311-.701 6.311-5.61-4.909-.702 8.883 3.507 2.104 39.27-.701 7.715-14.026-9.117-17.298h-33.193c-3.664.712-7.336 1.412-8.415 6.078z"
          display="inline"
        />
        <path
          fill="none"
          d="M-121.848-33.25h10.166l-5.042 3.637z"
          display="inline"
        />
        <path
          fill="none"
          d="M-107.877-19.736l4.79-8.555 6.611 8.017-5.206 9.504-3.967-2.314.496-4.876 3.305-2.48-.082 3.802"
          display="inline"
        />
      </g>
      <g transform="translate(183.986 69.495)">
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeLinejoin="round"
          d="M-147.922 19.398l8.415.233 8.415 15.428c2.947-.903 3.118-3.194 3.506-5.376V1.398c-.196-2.583 1.276-3.08 2.805-3.506l-.467-32.96c-10.34 1.319-20.412 3.24-23.843 20.103z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="round"
          d="M-121.987-35.142l-.222 28.593 25.511 9.59 22.48-.827 8.264 4.132 14.711 12.231 21.819-28.76-29.422-15.041c-4.468-7.022-9.141-10.554-14.05-10.083z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeLinejoin="round"
          d="M-57.108 62.526L-67.277 72.81l30.622-.818 13.09-27.35-8.648-7.948 7.012-18.466-.467-22.675c-.659-7.3-4.053-6.12-6.779-7.012h-17.765c-3.685.852-5.197 3.513-5.143 7.48l.467 40.907 12.39 10.052-7.714 17.298z"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeLinejoin="round"
          d="M-32.213 36.695l-12.914-6.217-2.314-23.967 14.215 7.604-4.628 13.719-2.314-4.298"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="round"
          d="M-87.855 2.668l-.082-21.611"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="round"
          d="M-83.888 2.503l-.082-21.281"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="round"
          d="M-79.838 2.338l-.165-21.777"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="round"
          d="M-76.119 2.255v-21.31"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeLinejoin="round"
          d="M-126.592-1.465l-13.122-29.462"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeLinejoin="round"
          d="M-127.4-.555l-21.691-14.41"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeLinejoin="round"
          d="M-127.566 2.09h-20.95"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="miter"
          d="M-73.705 40.903c.935.234 18.467 8.649 18.467 8.649l-6.662 14.26-1.87-11.338z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="miter"
          d="M-89.133 62.76l8.416-7.948 8.064-5.377 7.247 5.493-.234 11.22-6.078-4.09-9.233 3.039-5.26 19.518z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeLinejoin="miter"
          d="M-82.821 83.914c.35-1.636 4.324-17.415 4.324-17.415l10.286 1.17z"
          display="inline"
        />
      </g>
      <g transform="translate(143.1 127.407)">
        <path
          fill={
            isWeak && LEG_CHECK
              ? 'url(#linearGradient3088)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          stroke={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          strokeLinejoin="round"
          d="M-81.324-64.462v33.66l18.7 18.701-11.92 23.493-2.69-2.572-5.843 8.065 21.856-.701 17.766-32.726-12.623-10.753 1.636-6.545 4.675-7.013L-50-64.228c-.442-6.238-3.04-5.467-5.142-6.312l-21.038.701c-2.159.57-4.665.185-5.143 5.377z"
          display="inline"
        />
        <path
          fill="none"
          stroke={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          strokeLinejoin="round"
          d="M-56.078-27.295l-12.131-9.892-1.322-20.33 9.421-.496 1.157 13.058-4.297 4.132-1.323-4.132"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          stroke={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          strokeLinejoin="miter"
          d="M-89.523-16.328c.935.234 18.467 8.649 18.467 8.649L-77.718 6.58l-1.87-11.337z"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          stroke={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          strokeLinejoin="miter"
          d="M-104.95 5.528l8.415-7.948 8.064-5.376 7.247 5.493-.234 11.22-6.078-4.09-9.233 3.039-5.26 19.518z"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          stroke={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          strokeLinejoin="miter"
          d="M-98.64 26.683c.351-1.636 4.325-17.415 4.325-17.415l10.286 1.169z"
          display="inline"
        />
      </g>
    </svg>
  )
}
