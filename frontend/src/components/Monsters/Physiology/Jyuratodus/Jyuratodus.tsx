import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Jyuratodus: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const HEAD_CHECK = monster === 'Jyuratodus' || monster === 'Lavasioth'
  const CHEST_CHECK = monster === 'Lavasioth'
  const TAIL_CHECK = monster === 'Jyuratodus'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="320"
      version="1.1"
      viewBox="0 0 158.421 160.405"
    >
      <defs>
        <linearGradient id="linearGradient3886">
          <stop offset="0" stopColor="red" stopOpacity="1" />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.darkFill}
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="linearGradient3878">
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
          id="linearGradient3880"
          x1="43.099"
          x2="83.178"
          y1="42.931"
          y2="42.847"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3878"
        />
        <radialGradient
          id="radialGradient3892"
          cx="88.702"
          cy="92.628"
          r="41.371"
          fx="88.702"
          fy="92.628"
          gradientTransform="matrix(.95334 .01857 -.0197 1.01121 6.314 -2.79)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3886"
        />
      </defs>
      <g stroke={styleGuide.color.brown.darkStroke} strokeLinejoin="round">
        <path
          fill={
            isWeak && CHEST_CHECK
              ? 'url(#radialGradient3892)'
              : styleGuide.color.brown.darkFill
          }
          fillOpacity="1"
          d="M59.706 20.037c36.01-1.146 76.707-9.764 80.993 39.67l.66 57.851c.346 13.286-3.147 23.926-15.536 28.43l-22.48-16.86-.33-9.917c-9.66.852-13.9-2.632-14.216-9.256l-.33-30.083c-.407-5.004-3.13-6.92-7.273-6.942L61.03 71.607z"
        />
        <path
          fill="none"
          d="M67.144 31.442l3.637-4.959 6.28.165 2.15 8.926-7.934 3.14z"
        />
        <path
          fill="none"
          d="M101.36 40.533l2.81-7.438 8.76-2.48 1.653 10.414-8.926 5.785z"
        />
        <path
          fill="none"
          d="M105.822 63.178c.662 0 7.108-.331 7.108-.331l-1.157 8.1-6.281-1.984z"
        />
        <path fill="none" d="M123.343 51.607l-1.322 7.108 7.603.33.827-8.43z" />
        <path
          fill="none"
          d="M124.5 85.326c1.157 0 10.744 1.653 10.744 1.653l-.165 10.083-9.422-1.488z"
        />
        <path fill="none" d="M109.955 109.293l8.099.827.496 9.09-8.265-.495z" />
        <path
          fill="none"
          d="M129.294 112.93l7.438-1.322.165 7.107-8.265.661z"
        />
      </g>
      <g
        stroke={styleGuide.color.brown.lightStroke}
        strokeLinejoin="round"
        transform="translate(113.297 -32.546)"
      >
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          d="M-52.269 47.955l48.926-.992-.33-4.959-17.521-8.925z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          d="M20.46 62.5c8.557 4.74 17.64 8.58 24.131 16.86l-3.305 18.513-8.926.66c-.288-13.237-6.148-24.617-11.9-36.033z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          d="M-66.484 146.468l12.232-17.19c9.477.55 26.925-3.246 28.43 1.653l2.644-15.207c.322-3.128 3.572-4.304 7.604-4.959h11.57c2.959 1.04 4.824 3.448 5.29 7.604l-.331 11.9c-.124 4.112-2.738 4.488-5.29 4.96l-8.595-.331c-.152 9.668-9.024 6.88-15.206 7.934-1.769 7.927-31.713 3.835-38.348 3.636z"
        />
        <path
          fill="none"
          d="M-25.822 130.93s-5.074.181-7.028 1.577c-1.494 1.068-2.912 2.86-2.883 4.698.027 1.788 1.486 3.452 2.947 4.484 1.303.92 4.65 1.143 4.65 1.143"
        />
        <path fill="none" d="M-35.12 134.98l-22.975-.248" />
        <path fill="none" d="M-34.045 140.683l-28.513.206" />
        <path
          fill="none"
          d="M-12.93 134.898l-4.182-2.563-.205-11.308 10.899-1.49.321 6.633-6.311-.322"
        />
        <path fill="none" d="M28.517 79.815l8.636-7.562" />
        <path fill="none" d="M33.393 75.6l9.546 12.644" />
        <path fill="none" d="M31.327 77.335l5.868 20.786" />
        <path fill="none" d="M-34.849 39.65l5.143 7.832" />
        <path fill="none" d="M-32.716 42.865l19.49-5.727" />
        <path fill="none" d="M-30.992 45.524l27.38-1.432" />
      </g>
      <g
        stroke={
          isWeak && TAIL_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
        strokeMiterlimit="4"
        display="inline"
      >
        <path
          fill={
            isWeak && TAIL_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M9.599 140.525l16.86-18.513 48.925-1.322 9.587 9.917h12.893l20.827 17.19-30.083.331-17.852 11.57-40 .331z"
        />
        <path fill="none" d="M84.971 130.607l-66.701.399" />
        <path fill="none" d="M88.608 148.128l-68.43 2.066" />
        <path
          fill="none"
          d="M93.484 137.798l.578 4.297 5.868-.992-.496-4.38z"
        />
        <path
          fill="none"
          d="M78.938 136.145l6.447 2.562-2.728 5.289-6.446-1.653z"
        />
        <path fill="none" d="M67.12 130.69l-9.67 10.744 9.835 7.273" />
        <path fill="none" d="M57.45 141.434l-47.851-.91" />
      </g>
      <g
        stroke={
          isWeak && HEAD_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? 'url(#linearGradient3880)'
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M59.706 20.037l.331 27.107 10.91-.33 2.974-3.637 9.257-.33L97.062 56.07 84.169 68.963l-10.248.66-4.958-4.297-7.934 1.653c.485 5.332-2.132 7.197-6.942 6.612l-40.992-.33c-7.345-.43-7.574-4.88-7.934-9.257l5.62-6.612 5.62 6.281 2.644-6.28 6.456 6.768 2.8-6.769 5.679 6.709 5.561-8.362 3.636 4.629-1.652-11.57-3.637 4.627-3.83-6.651-4.765 7.974-4.774-7.856-6.466 6.864-2.975-6.378-4.959 7.04-3.636-6.943c4.783-32.866 30.951-26.586 53.223-27.438z"
        />
        <path
          fill="none"
          d="M60.037 47.144l-11.24-.33.33 19.173 10.662-1.735V52.268h-5.62l.083 6.612"
        />
        <path fill="none" d="M70.946 46.814l8.76 10.082-10.743 8.43" />
        <path fill="none" d="M73.673 49.789l16.199-.579" />
        <path fill="none" d="M79.707 56.896l17.355-.826" />
        <path fill="none" d="M71.773 63.095l17.934.33" />
        <path
          fill="none"
          d="M33.095 36.896c.26-1.738 2.558-3.316 4.297-3.058 1.652.246 3.24 2.308 3.058 3.967-.19 1.75-2.3 3.58-4.05 3.389-1.796-.197-3.572-2.51-3.305-4.298z"
        />
        <path
          fill="none"
          d="M6.483 47.475c11.68.44 29.018-3.035 35.042 1.322l1.652 11.57c-.23 6.656-25.344 2.425-38.016 3.637"
        />
      </g>
    </svg>
  )
}
