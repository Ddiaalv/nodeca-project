import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Rathalos: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const TAIL_CHECK =
    monster === 'Rathalos' ||
    monster === 'Rathalos Celeste' ||
    monster === 'Rathian' ||
    monster === 'Rathian Rosa' ||
    monster === 'Bazelgeuse' ||
    monster === 'Legiana'

  const HEAD_CHECK =
    monster === 'Rathalos' ||
    monster === 'Rathalos Celeste' ||
    monster === 'Rathian' ||
    monster === 'Rathian Rosa' ||
    monster === 'Legiana' ||
    monster === 'Legiana aullador' ||
    monster === 'Bazelgeuse' ||
    monster === 'Bazelgeuse Magma'

  const WINGS_CHECK =
    monster === 'Rathalos' ||
    monster === 'Rathalos Celeste' ||
    monster === 'Rathalos Plateado' ||
    monster === 'Rathian' ||
    monster === 'Rathian Rosa' ||
    monster === 'Rathian Dorada' ||
    monster === 'Legiana' ||
    monster === 'Legiana aullador' ||
    monster === 'Bazelgeuse' ||
    monster === 'Bazelgeuse Magma'

  const SILVER_GOLDEN =
    monster === 'Rathalos Plateado' || monster === 'Rathian Dorada'

  const LEGIANA_BAZELGEUSE =
    monster === 'Legiana aullador' || monster === 'Bazelgeuse Magma'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      version="1.1"
      viewBox="0 0 180.645 150.811"
    >
      <defs>
        <linearGradient id="linearGradient927">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.lightFill}
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="linearGradient943">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.darkStroke}
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="linearGradient935">
          <stop
            offset="0"
            stopColor={styleGuide.color.brown.darkFill}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient
          id="linearGradient929"
          x1="73.22"
          x2="95.129"
          y1="113.816"
          y2="89.365"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient927"
        />
        <linearGradient
          id="linearGradient945"
          x1="98.994"
          x2="98.994"
          y1="124.234"
          y2="83.837"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient943"
        />
        <linearGradient
          id="linearGradient937"
          x1="140.455"
          x2="156.755"
          y1="88.444"
          y2="74.446"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient935"
        />
      </defs>
      <g
        stroke={
          isWeak && HEAD_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
        transform="translate(12.46 -29.582)"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          d="M-11.091 79.973l.701 13.09 6.312-5.61 4.207 3.74 3.974-4.909 3.74 3.74 6.078-5.376 2.805 4.909 3.974-4.208 7.714 5.844v-3.74l11.454-1.402-.468-5.377-10.285.468-.234-3.273L39.634 76.7l-.468-5.844-34.596.702-7.246 7.947z"
        />
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          d="M-9.455 96.102l-.234 18.233 7.247-9.35 35.53-.468-10.752-15.194-5.61 6.545-3.974-4.207-5.844 4.675-3.506-4.208-7.714 6.078z"
        />
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          d="M32.902 89.526c.661 0 8.595-.66 8.595-.66l-.33 6.61-7.935.331-2.975-2.314z"
        />
        <path
          fill="none"
          d="M-1.396 78.121l18.595-.413-.165 3.885-6.86.165-3.223-3.885"
        />
        <path
          fill="none"
          d="M30.092 100.27l-10.992.166 3.554-6.116 3.223 3.719-2.727.083"
        />
      </g>
      <g
        stroke={
          isWeak && WINGS_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
      >
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M32.23 32.998l14.727 2.805-1.169-6.779z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M33.4 22.713l11.92 3.974-.467-5.377z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M37.373 12.427l7.948 5.143 2.337-5.844z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M57.242.973L52.1 9.155l10.051-.468z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M70.566.74l-4.441 7.947h8.883z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M83.89.74l-4.908 7.246 9.35-.467z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M96.513 1.441l-4.675 6.311h10.285z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M109.136.74l-3.74 7.48 7.948-.468z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M121.058 1.908l-3.974 6.312 8.882-.468z"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          d="M83.606 71.254L67.74 88.444l-.992-45.785c.575-4.527-1.85-4.552-3.802-5.29l-7.107.662c-3.866.357-5.827-1.463-6.612-4.628l-.33-14.71c.76-5.986 4.096-6.386 7.438-6.778l94.38-1.983L136.5 24.808l9.918 8.264-10.414 11.736 7.934 10.413-63.471-.66c-5.205-.967-5.266 1.669-6.281 3.635l-.33 13.058z"
        />
        <path
          fill="none"
          d="M144.083 16.401L59.93 17.453c-3.513.172-5.252 1.231-5.025 3.273v10.168h88.71"
        />
        <path
          fill="none"
          d="M142.914 36.855H76.76c-4.993 0-3.845 12.389 0 12.389h62.53"
        />
      </g>
      <g
        fill={
          isWeak && LEGIANA_BAZELGEUSE
            ? 'url(#linearGradient929)'
            : styleGuide.color.brown.lightFill
        }
        stroke={styleGuide.color.brown.lightStroke}
        strokeLinejoin="round"
        transform="translate(-.836 -.207)"
      >
        <path d="M77.561 67.43l8.416-9.35.233 11.22z" />
        <path d="M89.483 67.196l6.078-8.65 1.636 9.351z" />
        <path d="M100.236 66.962l6.545-8.649.701 9.35z" />
        <path d="M110.988 67.43l8.65-5.143-2.338 8.883z" />
        <path d="M120.105 72.105l8.181-4.675-2.57 8.882z" />
        <path d="M128.52 77.481l7.714-4.675-2.337 9.116z" />
        <path d="M69.38 95.948L90.184 71.17l18.934-.702 22.207 12.857.935 4.675-10.986 1.403v15.895l-6.312 6.311-20.804 4.91-18.233.233-6.779-3.506z" />
        <path
          stroke={
            isWeak && LEGIANA_BAZELGEUSE
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          d="M75.925 116.752l.802-13.584 4.793 1.653.166 11.901"
        />
        <path
          stroke={
            isWeak && LEGIANA_BAZELGEUSE
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          d="M84.413 116.557v-15.455l3.801.083.827 15.33"
        />
      </g>
      <g
        fill={
          isWeak && SILVER_GOLDEN
            ? 'url(#linearGradient945)'
            : styleGuide.color.brown.darkFill
        }
        stroke={styleGuide.color.brown.darkStroke}
        strokeLinejoin="round"
        transform="translate(-.836 -.207)"
      >
        <path d="M63.235 120.592v8.181l-6.545-3.74z" />
        <path d="M62.767 131.11l.234 7.949-6.311-2.805z" />
        <path d="M62.767 142.331l.468 7.714-6.078-3.74z" />
        <path d="M90.117 85.529l.935 33.894c.483 4.696 2.101 8.067 6.311 8.415h11.112c.45 3.698 2.842 8.404-1.06 10.52l-19.636.233v-16.597H67.21v5.844h11.454v4.442h-10.52v6.311h11.221v3.74H68.845v7.948h47.686c3.185-.244 4.314-2.544 3.974-6.312V121.06c-.975-2.647-3.098-2.999-5.376-3.038h-6.546c-5.503-2.722-2.09-4.947 0-7.247l4.91-.234c1.623-.57 2.192-2.002 2.103-3.973l-.467-21.974c-.97-3.57-2.643-3.616-4.208-4.207l-13.558-.468c-3.413.208-5.701 2.29-7.246 5.61z" />
        <path d="M108.583 110.774l-9.648-.204-.744-17.314 11.488-1.116.826 11.034-6.818.124-.537-5.662" />
      </g>
      <g
        stroke={styleGuide.color.brown.darkStroke}
        strokeLinejoin="round"
        transform="translate(-.836 -.207)"
      >
        <path
          fill={
            isWeak && SILVER_GOLDEN
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && SILVER_GOLDEN
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          d="M152.094 72.462l4.675-11.687 5.844 12.155z"
        />
        <path
          fill={
            isWeak && SILVER_GOLDEN
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && SILVER_GOLDEN
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          d="M153.964 85.319l10.986-2.571-3.974 14.259z"
        />
        <path
          fill={
            isWeak && SILVER_GOLDEN
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && SILVER_GOLDEN
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          d="M171.963 72.696l.701 9.117 8.65-6.546z"
        />
        <path
          fill={
            isWeak && SILVER_GOLDEN
              ? 'url(#linearGradient937)'
              : TAIL_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          d="M124.978 92.8l10.051-.235 1.403 27.584 3.039-.234-1.169-39.037c.164-2.8 3.078-3.95 6.311-4.91l23.843.936-20.57 7.714 1.169 43.01c-7.636 8.416-15.272 8.416-22.908 0z"
        />
      </g>
      <g stroke={styleGuide.color.brown.darkStroke} strokeLinejoin="round">
        <path
          fill={styleGuide.color.brown.darkFill}
          d="M62.87 71.201l.702 24.545c-.205 4.47-1.882 7.468-5.61 8.415l-25.246 1.169c-4.474-1.292-7.282-4.25-9.116-8.182l.233-18.233 19.636-.701.701 11.22 6.545-.234-.467-12.856c.44-3.561 1.993-4.896 3.74-5.844z"
        />
        <path fill="none" d="M50.704 78.576l12.231-.33" />
        <path fill="none" d="M43.82 85.285l-20.162.409" />
        <path fill="none" d="M23.658 94.401l20.512-4.967" />
        <path fill="none" d="M44.988 89.493L32.716 105.33" />
        <path fill="none" d="M47.735 89.317l-.526 15.311" />
        <path fill="none" d="M50.014 89.259l12.272 11.512" />
        <path fill="none" d="M50.54 84.7l12.74 4.793" />
      </g>
    </svg>
  )
}
