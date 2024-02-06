import { SVGProps, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const IconBgHero = (props: SVGProps<SVGSVGElement>) => {
  const backgroundRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '#svg-path',
        { strokeDasharray: '0 500' },
        {
          strokeDasharray: '500 0',
          duration: 2,
          delay: 2.5,
          ease: 'power2.inOut',
        },
      );
    },
    { scope: backgroundRef },
  );

  return (
    <svg
      ref={backgroundRef}
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="560"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      {...props}
    >
      <g mask='url("#SvgjsMask1073")'>
        <g fill="none" mask='url("#SvgjsMask1075")'>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1412.5 312.5l-25-25h-25m75 0h-25m50 0h-25l-25 25h-25"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1381.25 312.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-25-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm50 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1062.5 237.5h-50m100 0l-25 25h-75m125-25l-25 25-25 25h-50m150-50l-25-25h-25m325 50h-50l-25-25-25-25h-150l-25 25h-125l-25-25"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1031.25 212.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-25 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm0 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm25 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm100-75a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1362.5 337.5l-25-25-25-25h-25m-50 25l-25 25m-25-25l-25 25m300-25h-25l-25 25h-75l-25-25h-175"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1131.25 312.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm150-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-75 50a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-50 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1462.5 237.5h-50l-25-25-25-25h-175"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1181.25 187.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1037.5 412.5l-25-25m0 25l-25 25h-50m225-50h-50l-25-25h-25m200 25l-25-25h-25m0 25l-25 25m275-75h-25l-25 25h-75l-25 25h-150l-25 25h-225"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M906.25 412.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm100-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-75 50a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm125-75a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm150 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-25 50a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1312.5 162.5l-25-25m-50 25l-25-25m125 25l-25-25m150 75h-50l-25-25-25-25h-250"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1106.25 162.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm175-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-75 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm100 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1462.5 362.5h-25l-25 25h-75l-25 25"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1306.25 412.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1162.5 112.5l-25 25m-225-25l-25 25m125 0l-25 25h-125m125-25h-75m200 0l-25-25h-75m-75 0l-25-25h-125m25 25l-25 25m675 50h-50l-25-25-25-25-25-25h-200l-25 25h-125l-25-25h-175"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M781.25 112.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm350 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-250 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-25 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm50-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm100-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-225-25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm0 50a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1312.5 437.5l-25 25h-50m125-50l-25 25-25 25-25 25m0-50l-25-25h-25m225-25h-25l-25 25h-75l-25 25h-125l-25-25"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M1156.25 412.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm75 50a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm50 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-50-75a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
          <path
            id="svg-path"
            stroke='url("#SvgjsLinearGradient1074")'
            strokeWidth="1.5"
            d="M1062.5 87.5l-25-25h-75m375 25l-25-25h-25m-175 25l-25-25h-25m200 25l-25-25h-75m-150 25h-50m500 75h-50l-25-25-25-25-25-25h-325l-25 25"
          ></path>
          <path
            id="svg-path"
            fill='url("#SvgjsLinearGradient1074")'
            d="M981.25 112.5a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-25-50a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm325 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-225 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm100 0a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0zm-200 25a6.25 6.25 0 1012.5 0 6.25 6.25 0 10-12.5 0z"
          ></path>
        </g>
      </g>
      <defs>
        <mask id="SvgjsMask1073">
          <path id="svg-path" fill="#fff" d="M0 0H1440V560H0z"></path>
        </mask>
        <linearGradient
          id="SvgjsLinearGradient1074"
          x1="720"
          x2="1440"
          y1="280"
          y2="280"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor"></stop>
          <stop offset="1" stopColor="currentColor"></stop>
        </linearGradient>
        <mask id="SvgjsMask1075">
          <path id="svg-path" fill="#fff" d="M0 0H1440V560H0z"></path>
          <path
            id="svg-path"
            d="M1384.37 312.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-25-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm50 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM1034.37 212.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-25 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm0 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm25 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm100-75a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM1134.37 312.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm150-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-75 50a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-50 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM1184.37 187.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM909.37 412.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm100-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-75 50a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm125-75a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm150 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-25 50a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM1109.37 162.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm175-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-75 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm100 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM1309.37 412.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM784.37 112.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm350 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-250 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-25 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm50-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm100-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-225-25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm0 50a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM1159.37 412.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm75 50a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm50 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-50-75a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zM984.37 112.5a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-25-50a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm325 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-225 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm100 0a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0zm-200 25a3.13 3.13 0 106.26 0 3.13 3.13 0 10-6.26 0z"
          ></path>
        </mask>
      </defs>
    </svg>
  );
};

export default IconBgHero;
