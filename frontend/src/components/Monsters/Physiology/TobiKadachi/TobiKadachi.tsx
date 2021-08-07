import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const TobiKadachi: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const NECK_CHECK = monster === 'Tobi-Kadachi Vípero'
  const TAIL_CHECK = monster === 'Tobi-Kadachi'
  const LEG_CHECK = monster === 'Tobi-Kadachi Vípero'
  const HEAD_CHECK =
    monster === 'Tobi-Kadachi Vípero' || monster === 'Tobi-Kadachi'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      version="1.1"
      viewBox="0 0 176.479 145.963"
    >
      <g strokeLinejoin="round" transform="translate(74.707 55.701)">
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M36.422 72.9l8.181 5.843L31.28 89.73z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-9.406-21.613L-9.628 6.98l25.512 9.59 22.479-.827 8.265 4.132 14.71 12.232 21.819-28.76-29.422-15.042c-4.468-7.022-9.141-10.553-14.05-10.083z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M47.175 73.133l-3.04 12.856 31.792-.467 13.09-27.35-8.65-7.947 7.014-18.467-.468-22.674c-.659-7.301-4.053-6.12-6.779-7.013H62.37c-3.684.852-5.197 3.514-5.143 7.48l.468 40.908L70.083 60.51l-7.714 17.298z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M80.368 50.225l-12.914-6.217L65.14 20.04l14.215 7.603-4.628 13.72-2.314-4.298"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          d="M24.727 16.198l-.083-21.612"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          d="M28.694 16.032l-.083-21.28"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          d="M32.743 15.867L32.578-5.91"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          d="M36.462 15.784v-21.31"
        />
      </g>
      <g
        stroke={
          isWeak && NECK_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(188.004 23.155)"
      >
        <path
          fill={
            isWeak && NECK_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M-148.28 65.77l8.416.235 8.415 15.428c2.946-.904 3.118-3.195 3.506-5.377V47.772c-.196-2.583 1.275-3.082 2.805-3.507l-.467-32.96c-10.34 1.32-20.412 3.241-23.843 20.104z"
          display="inline"
        />
        <path fill="none" d="M-126.95 44.908l-13.122-29.462" display="inline" />
        <path fill="none" d="M-127.758 45.818l-21.69-14.41" display="inline" />
        <path fill="none" d="M-127.923 48.463h-20.95" display="inline" />
      </g>
      <g transform="translate(74.707 55.701)">
        <path
          fill={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          stroke={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          strokeLinejoin="round"
          d="M-10.729-25.014l88.594.233c4.675.624 7.791 2.494 9.35 5.61l2.104 39.038 10.986-8.883.935-30.388C99.854-41.452 71.971-40.928 55.658-50.26l4.675 10.285-37.401-15.194 8.415 12.857-33.894-6.312L9.608-37.637z"
        />
      </g>
      <g
        stroke={
          isWeak && LEG_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(-.204 -.264)"
      >
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M45.413 132.137l7.48 3.039-10.285 10.519z"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M65.283 62.945v33.661l18.7 18.7-13.324 22.441-10.753-4.675-8.415 9.818 33.895.701 17.765-32.726-12.623-10.753 1.636-6.545 4.676-7.012-.234-23.376c-.443-6.237-3.041-5.467-5.143-6.311l-21.038.7c-2.158.571-4.664.186-5.142 5.377z"
          display="inline"
        />
        <path
          fill="none"
          d="M90.528 100.112l-12.13-9.891-1.323-20.33 9.422-.497 1.157 13.058-4.298 4.132-1.322-4.132"
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
        transform="translate(74.707 55.701)"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M-74.174 16.992l13.791 17.064h8.65z"
          display="inline"
        />
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M-59.915 17.225l12.622 16.363h9.117z"
          display="inline"
        />
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M-70.668 52.523l6.779-6.546.701 8.65 8.883-7.948.234 7.012 6.778-6.545.468 6.312 6.779-8.182 3.74 7.948-3.974 6.077-6.077-3.973-.936 6.545-7.48-5.61-.467 6.311-8.182-6.311-.7 6.311-5.611-4.909-.701 8.883 3.506 2.104 39.271-.702 7.714-14.025-9.117-17.298h-33.193c-3.664.712-7.336 1.412-8.415 6.078z"
          display="inline"
        />
        <path
          fill="none"
          d="M-50.277 39.71h10.166l-5.042 3.637z"
          display="inline"
        />
        <path
          fill="none"
          d="M-36.306 53.224l4.79-8.555 6.612 8.017-5.207 9.504-3.967-2.314.496-4.876 3.306-2.48-.083 3.802"
          display="inline"
        />
      </g>
    </svg>
  )
}
