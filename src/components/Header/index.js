import React, { useEffect, useRef } from "react";
import ButtonLink from "../shared/Buttons/ButtonLink.js";
import KUTE from "kute.js";

import "./header.scss";

const Header = () => {
  const bloob1 = useRef(null);
  const bloob2 = useRef(null);

  useEffect(() => {
    const tween = KUTE.fromTo(
      bloob1.current,
      { path: bloob1.current },
      { path: bloob2.current },
      { repeat: 15, duration: 9000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div className="header__wrapper">
      <svg
        className="header__bloob"
        width="542"
        height="518"
        viewBox="0 0 542 518"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f)">
          <path
            className="header__bloob--hidden"
            ref={bloob2}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M250.995 94.0039C296.712 93.6882 339.139 112.72 370.572 145.907C406.244 183.569 443.055 231.929 428.891 281.825C415.095 330.429 355.382 341.531 309.21 362.08C265.831 381.385 220.599 413.723 177.556 393.681C134.194 373.491 124.312 319.133 115.882 272.063C108.107 228.652 106.81 182.681 133.472 147.544C160.845 111.47 205.703 94.3166 250.995 94.0039Z"
            fill="url(#paint0_linear)"
            fillOpacity="0.75"
          />
        </g>
        <g filter="url(#filter1_f)">
          <path
            ref={bloob1}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M505.704 270.76C510.052 314.246 480.331 352.527 455.148 388.246C431.597 421.652 404.921 454.851 366.361 468.408C328.946 481.562 288.557 471.618 250.586 460.167C214.755 449.362 186.111 427.175 155.989 404.968C115.778 375.324 61.8932 356.306 45.6313 309.07C28.2277 258.518 37.801 197.34 69.7506 154.473C100.817 112.791 160.163 111.296 208.073 91.1182C256.075 70.9016 300.91 19.8088 350.312 36.3114C400.216 52.9816 403.883 122.382 432.951 166.238C456.991 202.509 501.375 227.461 505.704 270.76Z"
            fill="url(#paint1_linear)"
            fillOpacity="0.75"
          />
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="91"
            y="74"
            width="361"
            height="346"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
          </filter>
          <filter
            id="filter1_f"
            x="0"
            y="0"
            width="541.39"
            height="517.704"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="271.5"
            y1="94"
            x2="271.5"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8FCF1" />
            <stop offset="1" stopColor="#A5E1BF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="503.113"
            y1="239.499"
            x2="38.2776"
            y2="278.205"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8FCF1" />
            <stop offset="1" stopColor="#A5E1BF" />
          </linearGradient>
        </defs>
      </svg>

      <header className="header">
        <p className="header__title">Luis Vasquez</p>
        <h1 className="header__subtitle">Jr frontend developer</h1>
        <p className="header_text">
          hola como estas Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ex odit nihil quos est unde nemo obcaecati atque officia sequi,
          nam dolor cum, accusamus impedit error sapiente ipsum eaque earum
          maiores! Placeat ea corrupti officiis similique maiores consequatur
          fugit laudantium error assumenda quasi modi quisquam incidunt.
        </p>
        <ButtonLink />
      </header>
    </div>
  );
};

export default Header;
