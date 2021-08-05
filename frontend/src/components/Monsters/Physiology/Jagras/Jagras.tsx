import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Jagras: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const HEAD_CHECK = monster === 'Gran Jagras' || monster === 'Dodogama'
  const CHEST_CHECK = monster === 'Gran Jagras'
  const LEG_CHECK = monster === 'Gran Jagras'
  const TAIL_CHECK = monster === 'Dodogama'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="320"
      version="1.1"
      viewBox="0 0 165.972 120.411"
    >
      <defs>
        <linearGradient id="linearGradient6704">
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
          id="linearGradient6706"
          x1="76.023"
          x2="87.203"
          y1="110.24"
          y2="59.464"
          gradientTransform="translate(-1.983 -3.719)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6704"
        />
        <linearGradient
          id="linearGradient6698"
          x1="15.197"
          x2="97.511"
          y1="84.29"
          y2="65.116"
          gradientTransform="translate(-2.81 .579)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6696"
        />
        <linearGradient id="linearGradient6696">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.lightFill}
            stopOpacity="0.957"
          />
        </linearGradient>
      </defs>
      <g display="inline" transform="translate(-6.32 4.349)">
        <path
          fill={
            isWeak && CHEST_CHECK
              ? 'url(#linearGradient6698)'
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="1.065"
          d="M71.726 28.504L55.693 55.116l-31.24 2.975-12.066 26.777 17.355 21.158 51.399-.285 12.403-3.352 11.323 3.554 10-10.91-16.034-12.065 18.182-32.15-18.512-3.801z"
          display="inline"
        />
      </g>
      <g
        stroke={
          isWeak && HEAD_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(-6.32 4.349)"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M6.852 7.755l1.753.117-.233 6.895h7.363V7.521h3.039v6.662l5.803-1.555V6.586h3.313v6.662h5.961l1.286-3.156 7.48 12.272-3.74 6.078v-2.805h-7.831v6.545h-3.273v-6.311H20.41v5.96h-2.805v-5.843h-6.662v6.311H7.904v13.909c.138 2.295 1.044 4.164 3.974 4.908l40.206-.584c2.451.289 3.62-.92 4.208-2.805l13.44-27.583-22.674-23.96H14.216c-2.434.409-5.034.457-6.195 3.623z"
          display="inline"
        />
        <path
          fill="none"
          d="M33.108 1.656C33.175.77 34.146-.257 35.03-.187c.969.077 1.891 1.36 1.762 2.323-.116.869-1.214 1.716-2.083 1.603-.869-.114-1.668-1.21-1.602-2.083z"
          display="inline"
        />
      </g>
      <g
        stroke={styleGuide.color.brown.darkStroke}
        strokeLinejoin="round"
        transform="translate(-6.32 4.349)"
      >
        <path
          fill={
            isWeak && LEG_CHECK
              ? 'url(#linearGradient6706)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M60.32 44.703l7.439-14.711 3.967-1.488 23.802 32.893 1.157 3.967-22.645 41.157-23.306.331 1.818-10.744 4.132-.165 1.819 1.818L76.85 69.827l-14.71-7.273z"
        />
        <path
          fill="none"
          d="M60.32 44.703l11.902 8.926 2.644-14.215-6.611-3.306-3.14 6.446 4.132 3.14.33-2.644"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M50.238 98.422l-1.157 7.108-2.48 1.322-1.817 3.802-1.488-5.62 1.818-6.447z"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M43.957 93.133l-1.653 8.1-1.818.164-1.983 6.116.66-13.223z"
        />
      </g>
      <g
        stroke={styleGuide.color.brown.darkStroke}
        strokeLinejoin="round"
        display="inline"
        transform="translate(-6.32 4.349)"
      >
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M114.04 50.075l4.794-.166 14.38 21.819-8.595 14.215 5.785 5.785.496 3.471-10.083 14.71-22.149-.164-.496-9.091 8.1 3.14 8.595-8.76-17.025-12.397z"
          display="inline"
        />
        <path
          fill="none"
          d="M124.619 85.943l-12.066-7.108 5.289-12.397 7.769 5.786-2.645 4.628-3.471-1.488"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M85.94 99.497l10.249-2.645-.827 4.628-6.942 2.314-3.967 5.124z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          d="M89.743 105.943l6.942-2.975-.166 5.95-4.297 2.314-2.48 4.298z"
          display="inline"
        />
        <path
          fill={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          fillOpacity="1"
          d="M128.42 85.943l10.083 10.413s3.678 2.465 5.785 2.975c4.927 1.193 10.385 1.564 15.207 0 2.59-.84 4.985-2.61 6.612-4.793 3.28-4.401 4.994-10.068 5.454-15.537 2.026-24.064-12.231-71.406-12.231-71.406l-1.157 68.926c-2.155 7.08-8.768 5.689-15.207 4.628l-6.446-5.95z"
          display="inline"
        />
      </g>
    </svg>
  )
}
