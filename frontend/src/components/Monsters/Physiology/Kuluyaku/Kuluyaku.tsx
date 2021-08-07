import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Kuluyaku: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      version="1.1"
      viewBox="0 0 172.689 139.642"
    >
      <g
        stroke={
          isWeak && monster === 'Kulu-Ya-Ku'
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
        transform="translate(-12.685 -40.459)"
      >
        <path
          fill={
            isWeak && monster === 'Kulu-Ya-Ku'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          strokeWidth="1.065"
          d="M13.97 97.677l7.947-3.74 14.26-.701-.234 6.077H16.54c-1.213 2.236-2.78 4.503.701 6.312l41.375-.234c3.424.053 4.796-1.36 5.143-3.506l.233-18.467c-.818-2.953-3.303-4.906-6.31-6.545l-14.26.234-4.675 1.87c-3.963 6.603-9.495 4.579-15.194 1.636-15.932-2.23-8.361 10.15-9.584 17.064z"
        />
        <path
          fill="none"
          strokeWidth="0.687"
          d="M42.695 83.414c.253-1.064 1.834-1.977 2.896-1.642 1.06.335 1.72 1.949 1.372 2.985-.291.868-1.532 1.557-2.439 1.344-1.07-.251-2.079-1.639-1.83-2.687z"
        />
        <path
          fill="none"
          strokeWidth="1.065"
          d="M36.177 93.236l5.843-2.104 12.39-.234v7.48l-11.922 1.17.935-5.845 6.311.702"
        />
        <path
          fill={
            isWeak && monster === 'Kulu-Ya-Ku'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          strokeWidth="1.065"
          d="M55.11 73.6c.902-6.752-4.347-17.781 5.61-18.233l10.052.468s3.171 1.093 3.12 3.039c-.052 1.945-4.055 3.272-4.055 3.272l-7.714 1.403-1.402 9.818z"
        />
        <path
          fill={
            isWeak && monster === 'Kulu-Ya-Ku'
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          strokeWidth="1.065"
          d="M50.903 43.68l16.363.233c3.201.541 4.356 2.543 1.403 7.48C45.654 53.686 52.034 64.686 51.37 73.6l-5.844.468-1.403-22.674c.508-6.95 3.701-7.189 6.78-7.714z"
        />
      </g>
      <g strokeLinejoin="round" transform="translate(-12.685 -40.459)">
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M90.875 73.834l1.637 40.44c-.318 7.25-4.554 11.073-11.922 12.155l-20.804 1.169c-5.092-.62-9.971-1.878-13.324-7.714l.234-10.753 16.129-.701c-.897 10.746 6.531 9.223 13.791 7.948l3.974-4.442c.845-15.346-7.389-39.986 10.285-38.102z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M86.902 65.886L84.33 71.73l4.91-1.636z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M78.019 69.86l4.733 2.864-3.973 2.688z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M73.285 81.139c.234-.234 4.442-2.63 4.442-2.63l-.351 5.377z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M72.233 89.32l5.26-2.688-.175 6.604z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M72.876 99.956l4.558-2.746.293 6.253z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M71.941 108.956l4.09 4.09 1.52-5.025z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M69.136 109.365l-2.688 5.435 7.013-.059z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M115.319 59.072h5.289l-.826-3.967 5.124-5.455-8.1.496-1.487 2.149z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M127.05 47.829v11.395h4.733v-6.72l4.967-8.824-8.123 2.22z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M139.088 42.978l.058 16.363 6.428-.467-.292-10.636 7.83-4.325.06-2.922h-7.306z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M148.788 52.62l.176 7.072 3.798.876 1.286-5.434 8.649-6.136-11.98-.41z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M156.385 60.042l.351 3.507 4.15 3.623.584-3.097 7.13-2.98-10.345-2.864z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M163.515 69.276l3.974 5.2s5.727-4.499 5.493-4.499c-.234 0-9.467-.701-9.467-.701z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M161.236 99.78s-.919 35.087 2.571 51.193c.774 3.57 2.796 7.515 6.078 9.117 2.809 1.37 6.705.964 9.35-.701 3.042-1.916 3.801-1.247 5.376-9.35.839-17.825-.694-33.278-3.272-47.687-3.63 11.871-3.778 24.613-3.74 37.401-1.767 3.46-3.06 2.422-4.208 0l-1.636-52.361z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          strokeWidth="1.065"
          d="M94.85 82.015l.233-11.921c.09-4.414 2.204-7.749 8.883-8.649l45.115.701c5.088 1.044 8.257 5.926 12.155 9.35l7.714 10.052-14.026 18.233-22.44-6.311-4.675 2.57s-1.386 5.12-2.338 6.78c-.951 1.66-2.805 3.272-2.805 3.272l-8.649.468z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M128.51 84.82l2.338 36.7c.508 3.948 2.435 5.91 5.142 6.78l10.52-.235-2.806 27.35-10.519 8.415-10.986-3.273-3.273 12.156 30.622-.702 10.52-48.62-.936-7.013-5.143-.935-1.636-32.96c-.612-3.402-2.48-6.301-7.48-7.948l-10.519.935c-4.25 1.07-5.537 4.775-5.844 9.35z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M153.99 115.443l-14.96-.234-2.338-28.518 10.285-.468 1.636 23.142h-5.61v-3.974"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M93.943 73.629l1.14 26.853c.49 2.193 2.205 3.57 4.675 4.442h7.48l-.935 3.973-10.752 21.506-13.09.234-.235 7.48 15.662.935-1.169 3.272-14.493 1.87-.233 5.844 15.895.935-.467 3.273-15.428.234 1.402 5.376 21.038-1.636L122.9 96.742c1.22-2.835-.286-4.036-2.338-4.909l-8.649.234-.233-16.83c-.58-2.164-2.078-3.1-3.974-3.507l-9.35-.467c-2.044.145-4.09.285-4.413 2.366z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M111.913 92.067l-10.81 1.881-1.487-13.884 6.281.496.33 7.107"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M111.682 160.56l7.108.827-2.149 8.099-2.975-.661-3.471 10.413z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M108.707 162.709l-4.297 16.86-.662-17.19z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M97.467 163.535l4.298-.165-3.636 13.058z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M72.178 151.304l2.975 3.47 4.298-.33.991 5.124-9.421-.33z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M70.856 141.221l4.462 4.959 3.637-1.653-.992 5.454-7.603-1.322z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M71.352 130.147v6.446l2.479 1.322h5.29l.164-6.446-1.983 1.653-3.14-.33z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M79.45 84.94l11.819-.042"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M79.74 95.725l12.025-.207"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M80.65 106.965l11.57.165"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M78.624 114.114l11.24 7.727"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M71.93 117.006l.29 9.835"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M59.327 127.543l6.777-10.826"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          strokeWidth="1.065"
          d="M63.583 114.403l-16.984 2.396"
        />
      </g>
    </svg>
  )
}
