"use client";
import { useState, useEffect } from "react";
import { IconType } from "@/utils/IconType";
import { IIconParamters } from "@/utils/IIconParameters";
import Link from "next/link";

export default function Icon({ iconType, link }: IIconParamters) {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    } else if (iconType == IconType.TailwindCSS) {
      if (isDarkMode) {
        return (
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="32"
            height="32"
            className="rounded-full"
          >
            <defs>
              <image
                width="256"
                height="256"
                id="img1"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAgMAAAAhHED1AAAAAXNSR0IB2cksfwAAAAlQTFRFJCk48/X1JCk40KEzYQAAAAN0Uk5TAP8BHlUJOgAABFtJREFUeJztnEty2zAMhuWZet9Fcx8foYvkPrmP3Bln0b27yBF6CnfRvTvjii8RIAESJDSjTIZc2Yr0Gfgh8QEKOUygHb9Pkna/gC8H8PnpJLp+mh5nEiC+HhEiQGi/a9GLCHhpuH6a5gzQZAAwYQW0GRBNCIAGBV0LOgZAqwGrCR7QqIBpXgUPaPZg9cED2j0IPjhAhwfBBwfo8CD44AA9HngfLODw3AW4XQOgSwIvggV0SeBFsIA+CZwIBtApgRPBADolcCIYQKcETgQD6JXAirAFoFtDq+JBoaFV8aDQ0Kq4BaBfQ6PiBgBFEEwYNgAoomjiuAFAEUUTxw0AmigucdQDVFFc4vgBAKrbYLkRPgNAdSMut+JnAOgehWVYGoABGIABGIABaAA8fp00ALc6Lk6CigB7fYVQAqy5otIkpAAACbPCEF4AeAfsWbwTPADm/Aom8ACUduRV4AEz+saexgKQBwUfWADyoCAjCwAxsI07jwXMyXfOBw6QSMDHgQMkEkysDxwglYD1gQMgCV5fJ9YHEcCdSQeSAWQaTpwIDABpaD3gRJAAfKNFYAAmv/OcCEGLwABmdzr3RD5iSp4F2ONYyyjC/VgBPM7eYWRCFOHPtyrA/xreDVlFOEc5OEA4jEwIBx8/aoD7z2AteiaCCLf3GFEG8H4Knygf5mMNcHsKn6g43C/gpqQBQGUiDvNUBfz9Go25piYsR8BFNOAafyF5Kp5O5kAVABr1YMOnoj7FybuWRkDeO6IHuw4gugbYtdQBhAhtAEIEeI0AkImAuiYBIBMBdY6SmWpxnJUAiiO9BFCca0gASSDx+CCaredPZCMAmZCML7L1AoxDMsLJAFDG5ALhiiWakA6xQkDcJU5HWOmaKRCy08WLLkfIz25ZtV2oGQYJAKN3tREAq7g4V5sDfMSkhAyw3vfCXGkKAPecTN4UAO56mRMJAPUdIhMSADkhaQDgvke09YABSe8n8QEDkv5XIiMGJCOAxAcEyMZRgQ8IkA1igjggQHkYFQDKA3kdUJlKdAHqgYQAYjZUFwECiPlYXYQaoCoCBMzG5+JYXgYsl5rT2Sfy35cqwJ2NtYx/B2sAGhDWEdxajxxXMMB/RmKuIjzeqoA37y89IYkLMQ5w+x2sJdd6c3X1HldalA/rWpQHxOUoFYfbtZqAiCoTcVgOVQFgpZUv++d6DgXkBNKn4sUnJCoWgCbPgLCrdyWAWuu1ZbKIrqEtl0aI0AbIReB6R3EurTWfmImgzmhqc6rqrC7bO0vzyu2JaXVqXJ+cV28PqDco9Fsk0YTOTRr9NpF+o2pSb5UJ2gAMwAAMwAAMAALs/37i/oD931PdH7D/+8pqwP5vjX+AN+f3rx7Yv4Ji/yoSfSGMupZHDVCXI+1fUaUvClOXpakL49SlefriQHV5orpAUl2iqS8SVZepqgtl9aW66mJhdblyuwkh0bVZyba+aFxdtq4vnFeX7uv/eUDfvy/4D/YD1iapAnoiAAAAAElFTkSuQmCC"
              />
              <image
                width="180"
                height="108"
                id="img2"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAABsCAYAAADDoJhwAAAAAXNSR0IB2cksfwAACvFJREFUeJztnXlTGkkYh9lNlRpRzEFcIgSjBhSCrFFEuWY+dKJRo2g2X2yfhpkEuYZjhj7oX9VTlP7jMPPkTR/T3bGYzcwpf33chcvjr48uOMffHhtQhRM4hCy8KX17jHlswjv4AJ9KV49FOP181XahCQVYlf29bJYkyFsG1/uMI3HsN98GKY3iqgvyjiILl8Wrdqt43T6Q/b1tDAnSrkEdqvASYj7jRJ5T5g5FwfVvtqAKTYjLvi82mgVhjz2Rn0n8TOTwq/IwkQcoXLfXoAll2ffJRvEgbA0K/RJLqsrDZH7O9/YuNGTfNxvF8u/XJyHx/iiRZ5Z5GpGnl/k3R98f8nAs+z7aSA4iryOrE7rI0Vblfpl7qUJW9n21kRBkFu3k91FV5SCZ563KQ2T2WQH38OZhRfY9tllAEHnVG3oLFllexy+oiTEWZBZk4Ivs+20TYZA5gbCHBjUxRsnci6jWL2Tfe5uQg6zbsGd4VR5FMX/zsCP7GdiEFITNjmsvG1iVn5HvkgA7dq17PJnfLWFV9kX+w+3DClRlPxObGTORzGZXZV/kfpqyn43NlBEvD0F6WpkNrMrPyN3e+7iyn5HNFEHcc1uVR8pspdYpw2b/VJ66DpI5xKo8yJ2VWul4L92/WMqO32RVuVfm2KcuVmoV40n8eRmaGHNWZV/kXrSXOtu+O5N9DaHGb2osVVUOR2btpUbmU3BkX0doQeQkrJtclYOaGHOI3OGgi3ZSI/IBbHx4vDPn3ZXOItXZq/I2sorFqjVwPncXrTrez2eQNrgq98ocO/jRoSX7eU4aRE5BGpnNWZqGxJkpq7JYid1C5EuY6B0HpH0FFXAhr0pVHivzXbDMB4MyayM1Ir9F5I8QgwvZ1xNakLk+gcir4EApjL+JyCnkdSFpSFUeYP/HD2XbpMicQOKcJ7PgUvY1hRLETQfILPbCcOF1FH8fiTfB0akqTyizj3JtauRNQr5H5jUwYz8T5HXHyPwFkou4DiTeg7IBVXkYyizE9apyqkdmQU32dYUS5I3D5ogmhpTKgrRN2JI4SRKuzPe/Ke/d/9iScU/9IG4F1vtk7vxe5nWFFiR2hsicBKnv/SJvCnISJ0km7fiNq8q/Zd77wzYsvPOFsGJIrjlEZIE5i4IRudRXlcuLamIEBYnjUNGyKg+XuZcKpBZxHxH2fEgTo0Pm8VagbMd1qojOYJ/MSn4xpG1JnCQJoyoP5aPgIboOoxiGg8KIquzLnID1qK5hofFGLnyZlR4zPewuVFW94zetzD4ZaMHc/zOKoTgxfY2wB6NE7pFZoNwIzMxB4iNP5rrsa5kkvtTzDMfNW5WDOn4Tifxc5mfsPtwdgQtnMFEHEoEzUIPGOIn7RBa8zjzdbkb93BYSr+MnPrXq3SKxa0hVHibzc9odMnC22xXWAdf7rHkvEyVBSD1W5AGZnzoYVZ1rkCldPWr3LxR5WxInSYYNx80l84DIf2TukA1gyqrsy2zWlgyILN7DyMm+jlmDxA2Dq3I0Mj89Q6v/mQODzNrvL4G0DYmTJJHKHFFV9jFjVtC0IO5fUFN0OE6NJsbTAIn0020k7+TYhBRErptQleeVOaAqx9Jd7CY5qscTuWGr8siq7MtszqiG6fHEbdqO31CRBSWwO6jqFgR2FZokkdnx65U5B69kPxubGSMq9TJXZSuzgUHmC8RdDbvjp1FVFuStzAYFefdhdwmrsuAYNmQ/A5uQg8jrUDd4kqRfZME52AOPTA4C1+CNocNxvdihuWUJIm8isQN/y25iRFCVDwSy77GNhCBrDo5tVbYxKshbhT1dOn5DRC7Druz7aKNYELmFyCmNhuO+gFnb3tqEH8StQE2lqtwjs3hLrmXbyTZTB4lfgYO8FYhLrMpC4rp9Q84m1HQWrrbvHLiAnQir8hacirV+SFyU/b1tliQIG4cStLLdBasnUACxdUDmQ3cjxI0egcWWtVk4QuATuICG2OBFyAtVSMv+XsqleN3eLVy3L70tah1oFL63q3ACh0ffH7Lwpmd7rU14Bx/g0+HNQxFOve0CmlAAM3aktFE/CFz2Ng8vI288wt3vs/mbh0toge2U2IQTxF2DOlThpcSTorbEedfieODc7b05xxjYLCZIe+yJ/FLamSSjdyhaAyG29qvIbSIO0tagoNFJUbu5u3tlNva2USSexPsanxSVh2PZ99FGcopX7XWkdVQ8v2/GTRCrYM5m2jaTx2snv9e4Ko9iRRxECfaF82UIVXnVG3rTripPubFLBsw5pdRmMMicQNrDWWRWvCqP2z7ABbs/hGlB2G3Yk97EkHMmSRHM2s51mYO02Ynby1M0MZSpypNtt5UAO3atezyZ3y1hVR626noF7KuRumZimdWYJFnk1rRN2c/GZsogbhzSBg3Hhb0Jol3oqVMQ+FyVqqzwSVFWah3SO/tnq3LgXhhWapUjXrqHF6pX5SCZ563KU27sYqVWMV5V/myr8kw7FGkv9c5Pw7YaKHaXQalZlfU4k0RbqZH59P3PGyXPTp8pyJxE4HXtJ0nkbxiundTIfIDMG2DOuyuF/uo8XVVOHXYXq9bAOewuWnW8n88QOG1wVR62sUtL9vOcNEicgjSYszQNgTNTVuUktOASYf+Z5G8g8yvkrYALeYUmSaLamlZ5qZH4LXx8/99NDC5kX09oQeT6BFX5JTjwOYy/ibQpcCGpeRNj3HZbyrZJETkBOU9mwaXsawoliJwOqMoJcCGSsy8QeBMcBSZJojqTRLk2NSInETjfI/MamLGfCQK7Y6ryKbxZxHUg8x7Clg2oysNQZiGuV5VTPTILzDhLG4njsDlCZimV5VP3MMqtRU6SLOikqDJsybinfhC3Aut9MsdS/F7mdYUWRHZGdPikroBG4hTkNK/KwzZB3IaFd746Q3L/3TT7RfZkNmdRMOKW+mT+F97Kvi4RZI4jckXWcFzEG4ZXMo+3qUXcR6Q9H9LEECL7KNtxnSqIm+6TWckvhrgtzavyuK1pI2vWUZUvELcwoir7JGA9qmtYaLyRC6Vl9uMtVJU1SRL1SVEZaEFy3vvkDcU5SHsQILKPciMwMweJjzyZlemBjwviuhInSRZ1jMNRurt5+BlM1IHc+XmbgRoiN2BA4jEyv079utmM+rktJF7HT3xqtT5uQGoFqnKQzDOc3/cHZIUzISw44Hqf4udTSHYk9plM5C6/zKrOtaPupuHana2MyC0tq/L0MovqO5ZxIgfIbNaWDOI9jMObh0+yr2PWIHND5ao842GU0cv8q8s/vwwZd/aDzNrvtLk3QuoFTZLoWJV9mc2YFTQtyPsX1GxVnqwqezIn4LXsZ2czJohclzxJokNV9tFqEGAp44ncsFV5ZFX2MWdUw/R48jankXmJqrKgBHYHVd2CxK5CkyQqVGVBDiJ5l91mAUHepqKTJIEyzzFJMkxkK7MpQeQLWDW+Ko+XOW9lNihIvA+7Ucs8b1UOknkGkQXHoN0ssE1AkHUd6kvS8fM5B3vgkclB3hq80b6JMbrjZ4fmli1IvAkOsv5tYFU+EMi+xzYSgrQ5OLZV2caoIHAV9jSuymXYlX0fbRQLArfEglWNqvIXMGvbW5vwg7wVqCk6SSLekmvZdrLN1EHmV0jrQAXiEquykLhu35CzCTXp7sJVB5EvYCfCSZIt5D0VnTwoyv7eNksSpI1DCVo73QWrJ1BAYrFpeAZxxUaIGz0iv4Us4h7BCVxAAxxwEbkKadnfS+f8D57X6hklgQt8AAAAAElFTkSuQmCC"
              />
            </defs>
            <style></style>
            <g>
              <use href="#img1" x="0" y="0" />
              <use href="#img2" x="38" y="74" />
            </g>
          </svg>
        );
      } else {
        return (
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="32"
            height="32"
            className="rounded-full"
          >
            <defs>
              <image
                width="256"
                height="256"
                id="img1"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAgMAAAAhHED1AAAAAXNSR0IB2cksfwAAAAlQTFRFJCk4HBwcJCk4uQAxKgAAAAN0Uk5TAP8BHlUJOgAABFtJREFUeJztnEty2zAMhuWZet9Fcx8foYvkPrmP3Bln0b27yBF6CnfRvTvjii8RIAESJDSjTIZc2Yr0Gfgh8QEKOUygHb9Pkna/gC8H8PnpJLp+mh5nEiC+HhEiQGi/a9GLCHhpuH6a5gzQZAAwYQW0GRBNCIAGBV0LOgZAqwGrCR7QqIBpXgUPaPZg9cED2j0IPjhAhwfBBwfo8CD44AA9HngfLODw3AW4XQOgSwIvggV0SeBFsIA+CZwIBtApgRPBADolcCIYQKcETgQD6JXAirAFoFtDq+JBoaFV8aDQ0Kq4BaBfQ6PiBgBFEEwYNgAoomjiuAFAEUUTxw0AmigucdQDVFFc4vgBAKrbYLkRPgNAdSMut+JnAOgehWVYGoABGIABGIABaAA8fp00ALc6Lk6CigB7fYVQAqy5otIkpAAACbPCEF4AeAfsWbwTPADm/Aom8ACUduRV4AEz+saexgKQBwUfWADyoCAjCwAxsI07jwXMyXfOBw6QSMDHgQMkEkysDxwglYD1gQMgCV5fJ9YHEcCdSQeSAWQaTpwIDABpaD3gRJAAfKNFYAAmv/OcCEGLwABmdzr3RD5iSp4F2ONYyyjC/VgBPM7eYWRCFOHPtyrA/xreDVlFOEc5OEA4jEwIBx8/aoD7z2AteiaCCLf3GFEG8H4Knygf5mMNcHsKn6g43C/gpqQBQGUiDvNUBfz9Go25piYsR8BFNOAafyF5Kp5O5kAVABr1YMOnoj7FybuWRkDeO6IHuw4gugbYtdQBhAhtAEIEeI0AkImAuiYBIBMBdY6SmWpxnJUAiiO9BFCca0gASSDx+CCaredPZCMAmZCML7L1AoxDMsLJAFDG5ALhiiWakA6xQkDcJU5HWOmaKRCy08WLLkfIz25ZtV2oGQYJAKN3tREAq7g4V5sDfMSkhAyw3vfCXGkKAPecTN4UAO56mRMJAPUdIhMSADkhaQDgvke09YABSe8n8QEDkv5XIiMGJCOAxAcEyMZRgQ8IkA1igjggQHkYFQDKA3kdUJlKdAHqgYQAYjZUFwECiPlYXYQaoCoCBMzG5+JYXgYsl5rT2Sfy35cqwJ2NtYx/B2sAGhDWEdxajxxXMMB/RmKuIjzeqoA37y89IYkLMQ5w+x2sJdd6c3X1HldalA/rWpQHxOUoFYfbtZqAiCoTcVgOVQFgpZUv++d6DgXkBNKn4sUnJCoWgCbPgLCrdyWAWuu1ZbKIrqEtl0aI0AbIReB6R3EurTWfmImgzmhqc6rqrC7bO0vzyu2JaXVqXJ+cV28PqDco9Fsk0YTOTRr9NpF+o2pSb5UJ2gAMwAAMwAAMAALs/37i/oD931PdH7D/+8pqwP5vjX+AN+f3rx7Yv4Ji/yoSfSGMupZHDVCXI+1fUaUvClOXpakL49SlefriQHV5orpAUl2iqS8SVZepqgtl9aW66mJhdblyuwkh0bVZyba+aFxdtq4vnFeX7uv/eUDfvy/4D/YD1iapAnoiAAAAAElFTkSuQmCC"
              />
              <image
                width="180"
                height="108"
                id="img2"
                href="data:image/png;base64,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"
              />
            </defs>
            <style></style>
            <g>
              <use href="#img1" x="0" y="0" />
              <use href="#img2" x="38" y="74" />
            </g>
          </svg>
        );
      }
    } else if (iconType == IconType.TypeScript) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          className="rounded-full"
          viewBox="0 0 32 32"
        >
          <path
            fill={isDarkMode ? "#f3f5f5" : "#1c1c1c"}
            d="M0 16v16h32V0H0zm25.786-1.276a4 4 0 0 1 2.005 1.156c.292.312.729.885.766 1.026c.01.042-1.38.974-2.224 1.495c-.031.021-.156-.109-.292-.313c-.411-.599-.844-.859-1.505-.906c-.969-.063-1.594.443-1.589 1.292a1.26 1.26 0 0 0 .135.599c.214.443.615.708 1.854 1.245c2.292.984 3.271 1.635 3.88 2.557c.682 1.031.833 2.677.375 3.906c-.51 1.328-1.771 2.234-3.542 2.531c-.547.099-1.849.083-2.438-.026c-1.286-.229-2.505-.865-3.255-1.698c-.297-.323-.87-1.172-.833-1.229c.016-.021.146-.104.292-.188l1.188-.688l.922-.536l.193.286c.271.411.859.974 1.214 1.161c1.021.542 2.422.464 3.115-.156c.281-.234.438-.594.417-.958c0-.37-.047-.536-.24-.813c-.25-.354-.755-.656-2.198-1.281c-1.651-.714-2.365-1.151-3.01-1.854a4.2 4.2 0 0 1-.88-1.599c-.12-.453-.151-1.589-.057-2.042c.339-1.599 1.547-2.708 3.281-3.036c.563-.109 1.875-.068 2.427.068zm-7.51 1.339l.01 1.307h-4.167v11.839h-2.948V17.37H7.01v-1.281c0-.714.016-1.307.036-1.323c.016-.021 2.547-.031 5.62-.026l5.594.016z"
          />
        </svg>
      );
    } else if (iconType == IconType.NextJS) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32px"
          height="32px"
          viewBox="0 0 512 512"
        >
          <path
            fill={isDarkMode ? "#f3f5f5" : "#1c1c1c"}
            d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064m-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0z"
          />
        </svg>
      );
    } else if (iconType == IconType.Web) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 26 26"
        >
          <g fill="none">
            <defs>
              <mask id="IconifyId1932b80fd7788f4e83">
                <path fill="#fff" d="M0 0h26v26H0z" />
                <g fill="#000">
                  <path
                    fill-rule="evenodd"
                    d="M4.25 13a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0m16 0a7.25 7.25 0 1 1-14.5 0a7.25 7.25 0 0 1 14.5 0"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9.25 13c0 4.522 1.491 8.25 3.75 8.25s3.75-3.728 3.75-8.25S15.259 4.75 13 4.75S9.25 8.478 9.25 13m6 0c0 3.762-1.195 6.75-2.25 6.75s-2.25-2.988-2.25-6.75S11.945 6.25 13 6.25s2.25 2.988 2.25 6.75"
                    clip-rule="evenodd"
                  />
                  <path d="m6.602 8.467l1.006-1.112q.15.136.325.267c1.271.952 3.3 1.54 5.515 1.54c1.891 0 3.653-.427 4.931-1.158q.463-.265.819-.57l.974 1.141q-.466.399-1.048.73c-1.516.868-3.534 1.356-5.676 1.356c-2.522 0-4.865-.678-6.415-1.839a6 6 0 0 1-.431-.355m0 9.082l1.006 1.112q.15-.136.325-.267c1.271-.952 3.3-1.54 5.515-1.54c1.891 0 3.653.427 4.931 1.158q.463.265.819.57l.974-1.141a7 7 0 0 0-1.048-.73c-1.516-.868-3.534-1.356-5.676-1.356c-2.522 0-4.865.678-6.415 1.839a6 6 0 0 0-.431.355M4.75 13.75v-1.5h16.5v1.5z" />
                </g>
              </mask>
            </defs>
            <circle
              cx="13"
              cy="13"
              r="13"
              fill={isDarkMode ? "#f3f5f5" : "#1c1c1c"}
              mask="url(#IconifyId1932b80fd7788f4e83)"
            />
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

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {generateIcon()}
      </Link>
    );
  } else {
    return generateIcon();
  }
}
