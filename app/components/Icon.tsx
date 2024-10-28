"use client";
import { useState, useEffect } from "react";
import { IconType } from "@/utils/IconType";
import { IIconParamters } from "@/utils/IIconParameters";

export default function Icon(parameters: IIconParamters) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { iconType } = parameters;

  {
    /* Returns an svg icon based in the type of the icon */
  }
  const generateIcon: () => React.ReactElement = () => {
    if (iconType == IconType.Linkedin) {
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1326 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
            fill={isDarkMode ? "#f3f5f5" : "#1c1c1c"}
          />
        </svg>
      );
    } else if (iconType == IconType.Github) {
      return (
        <svg width="32px" height="32px" viewBox="0 0 20 20">
          <g id="SVGRepo_iconCarrier">
            <g id="Page-1" stroke="none" fill="none" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -7559.000000)"
                fill={isDarkMode ? "#f3f5f5" : "#1c1c1c"}
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#142]"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      );
    } else if (iconType == IconType.Mail) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 256 256"
        >
          <g
            transform="translate(0,256) scale(0.1,-0.1)"
            fill={isDarkMode ? "#f3f5f5" : "#1c1c1c"}
          >
            <path d="M1150 2554 c-189 -27 -313 -65 -454 -137 -484 -247 -760 -780 -682 -1317 50 -336 231 -642 504 -847 446 -335 1076 -334 1525 3 154 116 301 292 387 463 116 233 158 558 105 811 -96 457 -417 818 -858 965 -156 52 -392 78 -527 59z m845 -813 c-6 -5 -169 -126 -364 -270 l-354 -261 -31 23 c-17 13 -178 133 -358 266 -181 133 -328 244 -328 247 0 2 325 4 722 4 416 0 718 -4 713 -9z m-1052 -369 c181 -134 334 -241 341 -239 7 3 171 123 365 266 193 144 354 261 356 261 3 0 5 -193 5 -430 l0 -430 -730 0 -730 0 0 431 0 430 33 -23 c17 -12 180 -132 360 -266z" />
          </g>
        </svg>
      );
    } else {
      return <p className="bg-red-500">Error</p>;
    }
  };

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDark.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    prefersDark.addEventListener("change", handleChange);

    return () => prefersDark.removeEventListener("change", handleChange);
  }, []);

  return generateIcon();
}
