import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Girros: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="320"
      version="1.1"
      viewBox="0 0 164.557 119.719"
    >
      <defs>
        <linearGradient id="linearGradient2555">
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
          id="linearGradient2557"
          x1="63.042"
          x2="65.432"
          y1="106.002"
          y2="62.342"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient2555"
        />
      </defs>
      <g strokeLinejoin="round" transform="translate(40.92 -58.093)">
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M25.292 89.299L9.26 115.91l-27.273 1.322 14.711 24.794 7.769 3.967 37.183-7.227 19.355.5 9.578-27.654-18.513-3.802z"
          opacity="1"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M65.788 111.778l4.794-.165 14.38 21.818-8.595 14.215 5.785 5.786.496 3.47-10.083 14.711-22.149-.165-.496-9.09 8.1 3.14 8.595-8.76L49.59 144.34z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M76.367 147.646L64.3 140.54l5.289-12.397 7.769 5.785-2.645 4.628-3.471-1.487"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M37.689 161.2l10.248-2.644-.826 4.628-6.943 2.314-3.967 5.124z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M41.49 167.647l6.943-2.976-.165 5.95-4.298 2.315-2.48 4.297z"
        />
      </g>
      <g transform="translate(.034 -.18)">
        <path
          fill={
            isWeak && monster === 'Gran Girros'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          stroke={
            isWeak && monster === 'Gran Girros'
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          strokeLinejoin="round"
          d="M120.651 89.137l10.083 10.414s3.678 2.465 5.785 2.975c4.927 1.193 10.385 1.564 15.207 0 2.59-.84 4.985-2.61 6.612-4.793 3.28-4.401 4.994-10.068 5.454-15.538 2.026-24.063-12.231-71.405-12.231-71.405l-1.157 68.926c-2.155 7.08-8.768 5.688-15.207 4.628l-6.446-5.95z"
        />
      </g>
      <g
        stroke={
          isWeak && monster === 'Gran Girros'
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(.034 -.18)"
      >
        <path
          fill={
            isWeak && monster === 'Gran Girros'
              ? 'url(#linearGradient2557)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M53.531 53.416l7.438-14.71 3.967-1.488L88.738 70.11l1.157 3.967-22.645 41.157-23.306.33 1.818-10.743 4.133-.166 1.818 1.818L70.06 78.54l-14.71-7.272z"
        />
        <path
          fill="none"
          d="M53.531 53.416l11.9 8.926 2.646-14.215-6.612-3.306-3.14 6.447 4.132 3.14.33-2.645"
        />
        <path
          fill={
            isWeak && monster === 'Gran Girros'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M43.448 107.136l-1.157 7.107-2.48 1.322-1.817 3.802-1.488-5.62 1.818-6.446z"
        />
        <path
          fill={
            isWeak && monster === 'Gran Girros'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M37.167 101.846l-1.653 8.1-1.818.165-1.983 6.116.66-13.224z"
        />
      </g>
      <g
        stroke={
          isWeak && monster === 'Gran Girros'
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(.034 -.18)"
      >
        <path
          fill={
            isWeak && monster === 'Gran Girros'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M.499 12.284l1.753.117-.234 6.896h7.363V12.05h3.04v6.662l5.802-1.555v-6.042h3.314v6.662h5.96l1.286-3.155 7.48 12.272-3.74 6.077v-2.805h-7.83v6.546H21.42V30.4h-7.364v5.96h-2.805v-5.843H4.59v6.311H1.55v13.909c.139 2.295 1.044 4.164 3.974 4.909l40.206-.585c2.452.29 3.62-.92 4.208-2.805l13.44-27.583L40.706.713H7.862c-2.434.41-5.034.457-6.195 3.623z"
        />
        <path
          fill="none"
          d="M26.754 6.185c.067-.885 1.038-1.913 1.923-1.843.969.077 1.891 1.36 1.762 2.324-.116.868-1.214 1.715-2.083 1.602-.868-.113-1.668-1.21-1.602-2.083z"
        />
      </g>
    </svg>
  )
}
