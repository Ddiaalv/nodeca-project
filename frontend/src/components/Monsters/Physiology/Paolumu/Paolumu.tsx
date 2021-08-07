import { FC } from 'react'
import { styleGuide } from '../../../../../utils/styleGuide'
import PhysiologyProps from '../Physiology.types'

export const Paolumu: FC<PhysiologyProps> = ({ isWeak, monster }) => {
  const HEAD_CHECK = monster === 'Paolumu' || monster === 'Paolumu Somnus'
  const NECK_CHECK = monster === 'Paolumu' || monster === 'Paolumu Somnus'
  const CHEST_CHECK = monster === 'Paolumu Somnus'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      version="1.1"
      viewBox="0 0 174.325 150.811"
    >
      <defs>
        <linearGradient id="linearGradient2963">
          <stop
            offset="0"
            stopColor={styleGuide.color.red.light}
            stopOpacity="1"
          />
          <stop
            offset="1"
            stopColor={styleGuide.color.brown.lightFill}
            stopOpacity="0.831"
          />
        </linearGradient>
        <linearGradient
          id="linearGradient2965"
          x1="78.852"
          x2="116.417"
          y1="112.177"
          y2="80.13"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient2963"
        />
      </defs>

      <g stroke={styleGuide.color.brown.lightStroke} strokeLinejoin="round">
        <path
          fill={
            isWeak && CHEST_CHECK
              ? 'url(#linearGradient2965)'
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M79.086 94.879L99.89 70.1l18.934-.702 22.207 12.857.935 4.675-10.987 1.403v15.895l-6.311 6.311-20.804 4.91-18.233.233-6.78-3.506z"
        />
        <path
          fill="none"
          stroke={
            isWeak && CHEST_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          d="M85.63 115.683l.803-13.584 4.793 1.653.165 11.901"
        />
        <path
          stroke={
            isWeak && CHEST_CHECK
              ? styleGuide.color.red.dark
              : styleGuide.color.brown.lightStroke
          }
          fill="none"
          d="M94.119 115.488v-15.455l3.801.083.827 15.33"
        />
      </g>
      <g strokeLinejoin="round" transform="translate(357.836 309.86)">
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-270.569-243.5l8.415-9.35.234 11.22z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-258.647-243.733l6.077-8.649 1.637 9.35z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-247.895-243.967l6.546-8.649.7 9.35z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-237.142-243.5l8.65-5.142-2.338 8.883z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-228.025-238.824l8.181-4.675-2.571 8.882z"
        />
        <path
          fill={styleGuide.color.brown.lightFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.lightStroke}
          d="M-219.61-233.448l7.714-4.675-2.338 9.117z"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-313.925-277.07l14.727 2.806-1.17-6.779z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-312.756-287.354l11.921 3.974-.467-5.377z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-308.782-297.64l7.947 5.143 2.338-5.844z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-288.913-309.094l-5.143 8.182 10.052-.468z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-275.59-309.327l-4.44 7.947h8.882z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-262.265-309.327l-4.909 7.246 9.35-.467z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-249.642-308.626l-4.675 6.311h10.285z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-237.02-309.327l-3.74 7.48 7.948-.468z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-225.098-308.159l-3.974 6.312 8.883-.468z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-262.55-238.813l-15.867 17.19-.992-45.785c.576-4.527-1.85-4.552-3.801-5.29l-7.108.662c-3.866.357-5.827-1.463-6.611-4.628l-.331-14.71c.76-5.986 4.097-6.386 7.438-6.778l94.38-1.983-14.214 14.876 9.917 8.264-10.413 11.736 7.934 10.413-63.472-.66c-5.204-.967-5.265 1.669-6.28 3.635l-.331 13.058z"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-202.073-293.666l-84.152 1.052c-3.513.172-5.252 1.23-5.026 3.273v10.168h88.71"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-203.242-273.212h-66.153c-4.992 0-3.844 12.389 0 12.389h62.53"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-283.425-189.268v8.182l-6.546-3.74z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-283.893-178.749l.234 7.948-6.312-2.805z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-283.893-167.529l.468 7.714-6.078-3.74z"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-256.544-224.331l.935 33.894c.484 4.696 2.102 8.068 6.312 8.416h11.112c.45 3.698 2.842 8.403-1.06 10.519l-19.636.233v-16.596h-20.57v5.844h11.453v4.44h-10.519v6.312h11.22v3.74h-10.518v7.948h47.686c3.184-.244 4.313-2.543 3.974-6.311V-188.8c-.975-2.648-3.098-3-5.377-3.04h-6.545c-5.504-2.72-2.09-4.946 0-7.246l4.909-.233c1.623-.57 2.193-2.003 2.104-3.974l-.468-21.973c-.969-3.571-2.642-3.617-4.207-4.208l-13.558-.467c-3.413.207-5.702 2.289-7.247 5.61z"
          display="inline"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-238.077-199.086l-9.649-.203-.743-17.315 11.487-1.115.827 11.033-6.819.124-.537-5.661"
          display="inline"
        />
        <path
          fill={styleGuide.color.brown.darkFill}
          fillOpacity="1"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-224.21-215.44l.827 27.107c-.01 4.207 1.302 5.957 3.471 6.116l27.438.496c4.534-.291 6.483-3.426 7.934-7.108l.496-53.223c-.84-4.348-4.014-6.225-8.595-6.612l-8.595-.165c-2.897.47-6.033-.497-8.1 4.959-.176 3.119-7.212 36.734 11.57 37.19 2.05 12.527-1.975 17.97-14.875 13.058l-1.818-22.149z"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-213.3-201.97l-10.579-3.305"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-197.391-202.548l12.934.207"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-199.333-193.911l14.793 5.082"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-205.077-191.887l-.041 9.918"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-222.598-183.829l9.959-9.793"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-197.763-206.68c9.67 1.38 6.184-25.03 5.95-26.694-1.225-4.999-8.677-4.85-9.834.206l.082 13.306"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-201.606-226.721l-9.132.206"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-196.895-237.135l-.042-11.611"
        />
        <path
          fill="none"
          stroke={styleGuide.color.brown.darkStroke}
          d="M-190.945-221.928l6.612.29"
        />
      </g>
      <g
        stroke={
          isWeak && HEAD_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.lightStroke
        }
        strokeLinejoin="round"
        transform="translate(-.372)"
      >
        <path
          fill={
            isWeak && HEAD_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M19.595 72.257c-3.074-15.833.45-17.84 3.74-20.337 5.766.268 10.534 2.187 13.558 12.39-.181 7.99-4.268 12.022-9.584 13.79-3.35 11.873-10.26 16.643-21.271 17.766-14.855-5.088 6.556-24.148 13.557-23.61z"
        />
        <path
          fill="none"
          d="M13.627 81.442c-1.182.267-2.373 1.887-1.997 3.039.384 1.175 2.317 1.739 3.473 1.302.92-.347 1.65-1.656 1.39-2.605-.296-1.076-1.776-1.982-2.866-1.736z"
        />
        <path
          fill="none"
          d="M27.31 78.1c-5.06-5.804-2.69-11.196-2.572-16.713 3.005 1.302 5.671 3.078 7.13 6.545l-2.689 5.377-1.87-4.325"
        />
      </g>
      <g
        stroke={
          isWeak && NECK_CHECK
            ? styleGuide.color.red.dark
            : styleGuide.color.brown.darkStroke
        }
        strokeLinejoin="round"
        transform="translate(-.372)"
      >
        <path
          fill={
            isWeak && NECK_CHECK
              ? styleGuide.color.red.light
              : styleGuide.color.brown.lightFill
          }
          fillOpacity="1"
          d="M29.016 48.805c17.251 10.13 15.249 20.26 3.272 30.389-2.228 7.075-3.44 14.912-12.856 16.596 6.516 22.08 30.174 19.873 50.959 21.74 1.782-1.137 3.678-2.19 3.038-5.143l-.467-61.01c-.36-4.012-2.057-6.351-4.909-7.247-15.677-4.15-27.672-.412-39.037 4.675z"
        />
        <path
          fill="none"
          d="M51.26 55.555c.66-.495 6.28-2.81 6.28-2.81l1.322 7.604z"
        />
        <path fill="none" d="M61.342 65.803l5.785-5.124.992 7.439z" />
        <path
          fill="none"
          d="M56.548 69.936c-1.653 4.132-3.14 8.099-3.14 8.099l-5.95-7.934z"
        />
        <path fill="none" d="M49.771 91.093l3.306-6.446 3.967 5.95z" />
        <path fill="none" d="M40.846 88.614l-1.984 9.256-5.124-6.116z" />
        <path fill="none" d="M49.771 103.49l4.629 4.793-8.595 1.157z" />
        <path fill="none" d="M60.846 95.06l6.281 6.942 2.149-8.264z" />
      </g>
    </svg>
  )
}
