import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Teostra: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const HEAD_CHECK =
    monster === 'Teostra' ||
    monster === 'Lunastra' ||
    monster === 'Kushala-Daora' ||
    monster === 'Namielle'
  const TAIL_CHECK =
    monster === 'Teostra' ||
    monster === 'Lunastra' ||
    monster === 'Kushala-Daora'
  const WINGS_CHECK = monster === 'Teostra' || monster === 'Lunastra'
  const LEG_CHECK = monster === 'Namielle' || monster === 'Kushala-Daora'
  const CHEST_CHECK = monster === 'Namielle'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="320"
      version="1.1"
      viewBox="0 0 169.04 172.161"
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
          x1="76.023"
          x2="87.203"
          y1="110.24"
          y2="59.464"
          gradientTransform="translate(-1.983 -3.719)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6704"
        />
        <linearGradient
          id="linearGradient6906"
          x1="-60.808"
          x2="-53.623"
          y1="66.343"
          y2="18.458"
          gradientTransform="translate(-1.067 -.26)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6704"
        />

        <linearGradient id="linearGradient7034">
          <stop offset="0" stopColor="red" stopOpacity="1" />
          <stop offset="1" stopColor="#e1cc8d" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="linearGradient6704">
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
        <linearGradient
          x1="76.023"
          x2="87.203"
          y1="110.24"
          y2="59.464"
          gradientTransform="translate(-1.983 -3.719)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient6704"
        />
        <linearGradient
          id="linearGradient7036"
          x1="-42.753"
          x2="-34.82"
          y1="36.574"
          y2="1.404"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient7034"
        />
      </defs>
      <g
        stroke={styleGuide.color.brown.lightStroke}
        strokeLinejoin="round"
        transform="translate(116.872 105.276)"
      >
        <path
          fill={
            isWeak && CHEST_CHECK
              ? 'url(#linearGradient7036)'
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M-74.193 26.406h19.518l.818-21.74 11.571-.233 6.312-8.883L.609-5.034 14.283 6.42-1.495 25.237l-29.687.35-7.013 11.338-10.753-.35-9.934 7.596-2.688-4.792-8.416-.467 2.104-5.26z"
        />
        <path
          fill="none"
          d="M-42.753 36.574l-.117-17.999 3.857-2.22-.206 20.482"
        />
        <path fill="none" d="M-35.624 32.87V10.638l3.554.041-.372 16.943" />
      </g>
      <g strokeLinejoin="round" transform="translate(116.872 105.276)">
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-94.998-10.06l.234 27.583c.011 3.759 1.286 6.29 5.143 6.312l21.973-.702 1.402-24.544c-7.756-1.96-11.8.793-11.454 9.117h-2.805l-.935-17.532z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-42.753 36.574l-.117-17.999 3.857-2.22-.206 20.482"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-18.793 1.277l1.52 37.284 15.077 6.195-14.96 13.44-9.468-3.622-3.857 10.752 29.103-.116L8.79 43.12l-10.636-7.714 7.831-8.883-.234-24.428-7.48-5.727-12.857.117z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-1.846 35.406l-8.766-5.727-.467-21.973L.375 7.589l.117 16.363-5.961 3.155-.234-11.57"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-94.94-5.765l7.335 4.471 6.282-4.324"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-80.885 1.073l-6.37 4.909-7.655-4.5"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-80.534 7.063l-14.23 9.029"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-79.54 7.706l-4.734 15.924"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-70.716 23.192L-77.7 7.706l10.753 2.191"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-77.378 3.323l10.782.467"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-34.396 47.736c1.168.877 7.13 4.266 7.13 4.266l-3.682 2.747z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-41.292 56.502l9.642-.643-1.285 3.857z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-43.396 66.028l10.753-5.377.643 4.85z"
        />
      </g>
      <g
        stroke={
          isWeak && HEAD_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
        transform="translate(116.872 105.276)"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M-116.34-31.511c.935-.702 36.934-19.87 36.934-19.87l4.207 6.312-7.714 4.441 1.87 3.974 11.454-1.169.234 6.312-8.649.935.935 4.908 7.948-.7.234 5.843-7.48-.467 6.311 4.207-4.675 4.675-6.78-3.506-34.595.935 5.143-8.649z"
          display="inline"
        />
        <path
          fill="none"
          d="M-110.963-23.33l4.207-6.078 3.04 5.61 4.908-4.908 6.545 8.181 13.09-.701-12.389-17.766-.467 11.922 5.844 3.273-1.87-3.74"
          display="inline"
        />
        <path
          fill="none"
          d="M-103.016-34.55l7.013-3.273-.234 4.675z"
          display="inline"
        />
      </g>
      <g
        stroke={styleGuide.color.brown.darkStroke}
        strokeLinejoin="round"
        transform="translate(116.872 105.276)"
      >
        <path
          fill={
            isWeak && LEG_CHECK
              ? 'url(#linearGradient6906)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M-47.91 4.173l.934 27.583 7.48 10.52-16.596 24.076-19.168-.935 3.974-10.753 9.817 3.04 10.052-15.662-12.623-13.325.468-24.076z"
          display="inline"
        />
        <path
          fill="none"
          d="M-46.976 31.756l-10.752-11.454-.702-8.882h6.78l.467 7.246-3.507-.468"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M-78.798 46.164l9.09 6.115-5.288 2.645z"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M-86.188 53.67l9.408 1.52-1.577 5.552z"
          display="inline"
        />
        <path
          fill={
            isWeak && LEG_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M-88.701 65.534c.409-.175 9.642-4.032 9.642-4.032l1.637 4.441z"
          display="inline"
        />
      </g>
      <g
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
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1.065"
        display="inline"
        transform="translate(-.865 -.221)"
      >
        <path
          d="M154.178 52.811l-4.44 72.347c-2.78 6.61-6.908 8.666-13.208 3.39l-.701-14.96-9.701 9.7.818 12.74c.535 2.839 1.063 5.68 6.545 7.013l18.467-.234c8.019-.591 10.994-6.226 10.87-14.96z"
          display="inline"
        />
        <path
          d="M159.672 63.096l6.311.468 2.104 9-4.558-4.325-3.507-.234z"
          display="inline"
        />
        <path
          d="M161.659 74.784l5.96 2.104 1.637 10.285-4.091-5.376-3.974-.468z"
          display="inline"
        />
        <path
          d="M162.71 90.095l6.429.818.234 11.104-3.857-5.727-2.805-.117z"
          display="inline"
        />
      </g>
      <g
        stroke={
          isWeak && WINGS_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(-.865 -.221)"
      >
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M17.03 36.05C58.38 9.673 99.406 3.19 140.318 3.548c-6.312 4.242-12.954 6.871-19.265 14.504 6.249 6.538 14.5 8.74 23.376 9.584-25.388 14.192-30.57 28.902-4.442 44.414-12.632 4.008-20.617 11.697-22.674 24.077l-38.804 1.169-3.973 8.415-19.168-.234-3.273-50.257z"
          display="inline"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          fillOpacity="1"
          d="M11.654 34.648l6.78-6.779-6.078-3.74 6.077-7.948c-23.526 10.967-17.22 15.185-6.779 18.467z"
          display="inline"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          fillOpacity="1"
          d="M48.12 6.13l-6.545 7.013 3.039 4.908-6.779 3.273C28.513 13.961 30.651 8.664 48.12 6.13z"
          display="inline"
        />
        <path
          fill={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.darkFill
          }
          stroke={
            isWeak && WINGS_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.darkStroke
          }
          fillOpacity="1"
          d="M59.808 13.61l5.61-2.571-1.636-4.442L72.197.753c-10.634.554-20.393 1.61-12.389 12.857z"
          display="inline"
        />
        <path
          fill="none"
          d="M75.586 103.43l-17.18-11.804-.526 10.11 6.837-.35-2.98-3.507"
          display="inline"
        />
        <path
          fill="none"
          d="M60.48 93.029l-.077-35.599 54.587 38.72"
          display="inline"
        />
        <path
          fill="none"
          d="M117.78 93.613L66.352 51.478l73.633 20.57"
          display="inline"
        />
        <path
          fill="none"
          d="M129.164 63.96L48.237 37.803c26.58-7.51 60.039-6.487 91.778-7.597"
          display="inline"
        />
        <path
          fill="none"
          d="M135.486 6.568C94.57 8.604 67.071 19.521 40.9 31.314c30.015-6.249 60.27-6.003 90.496-6.529"
          display="inline"
        />
      </g>
    </svg>
  )
}
