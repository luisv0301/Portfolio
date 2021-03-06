import React from "react";

import "./socialmedia.scss";

export default function SocialMedia() {
  return (
    <ul className="social-media">
      <li className="social-media__item">
        <a
          href="https://twitter.com/luisvbdr"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
          className="social-media__links"
        >
          <svg
            width="30"
            height="24"
            viewBox="0 0 30 24"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5226 2.84684C28.4369 3.32792 27.2706 3.65297 26.0445 3.79989C27.3097 3.0429 28.2561 1.85148 28.7074 0.447947C27.5188 1.15395 26.2179 1.6509 24.8614 1.91719C23.9491 0.943152 22.7408 0.297546 21.424 0.0806033C20.1072 -0.13634 18.7557 0.0875171 17.5792 0.71742C16.4027 1.34732 15.467 2.34803 14.9175 3.56417C14.368 4.78031 14.2354 6.14385 14.5403 7.44309C12.1319 7.32216 9.77581 6.69618 7.625 5.60576C5.47418 4.51535 3.57668 2.98487 2.05564 1.11366C1.53555 2.0108 1.2365 3.05097 1.2365 4.15875C1.23592 5.15601 1.4815 6.13799 1.95146 7.01757C2.42142 7.89715 3.10122 8.64713 3.93054 9.20098C2.96874 9.17037 2.02817 8.91049 1.18709 8.44295V8.52096C1.187 9.91965 1.67082 11.2753 2.55645 12.3579C3.44209 13.4405 4.67501 14.1833 6.04599 14.4603C5.15376 14.7018 4.21833 14.7374 3.31034 14.5644C3.69715 15.7678 4.45062 16.8203 5.46527 17.5742C6.47992 18.3282 7.70495 18.7461 8.96886 18.7692C6.8233 20.4535 4.17353 21.3672 1.44584 21.3632C0.962652 21.3633 0.479877 21.3351 0 21.2786C2.76877 23.0589 5.99182 24.0037 9.28351 24C20.4263 24 26.5178 14.7711 26.5178 6.76698C26.5178 6.50694 26.5113 6.24429 26.4996 5.98425C27.6845 5.12738 28.7073 4.0663 29.52 2.85074L29.5226 2.84684Z"
              fill="#94A3B8"
            />
          </svg>
        </a>
      </li>
      <li className="social-media__item">
        <a
          href="https://www.behance.net/luisv0301"
          aria-label="Behance"
          target="_blank"
          rel="noreferrer"
          className="social-media__links"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z" />
          </svg>
        </a>
      </li>
      <li className="social-media__item">
        <a
          href="https://www.linkedin.com/in/luis-vasquez-ui"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
          className="social-media__links"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
        </a>
      </li>
      <li className="social-media__item">
        <a
          href="https://github.com/luisv0301"
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
          className="social-media__links"
        >
          <svg
            width="59"
            height="56"
            viewBox="0 0 59 56"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.5913 0C13.73 0 0.883087 12.8469 0.883087 28.7082C0.883087 41.4116 9.10082 52.1413 20.5123 55.9452C21.9477 56.1964 22.486 55.3351 22.486 54.5815C22.486 53.8997 22.4501 51.6389 22.4501 49.2346C15.2372 50.5624 13.3712 47.4762 12.797 45.8614C12.474 45.036 11.0745 42.4882 9.85441 41.8064C8.84962 41.2681 7.41421 39.9403 9.81852 39.9044C12.0793 39.8685 13.6941 41.9858 14.2324 42.847C16.8162 47.1891 20.943 45.969 22.5937 45.2155C22.8449 43.3494 23.5985 42.0934 24.4238 41.3757C18.0363 40.658 11.3616 38.1819 11.3616 27.201C11.3616 24.079 12.474 21.4953 14.3042 19.4857C14.0171 18.768 13.0123 15.8254 14.5913 11.878C14.5913 11.878 16.9956 11.1244 22.486 14.8206C24.7827 14.1747 27.2229 13.8517 29.6631 13.8517C32.1033 13.8517 34.5435 14.1747 36.8401 14.8206C42.3306 11.0886 44.7349 11.878 44.7349 11.878C46.3139 15.8254 45.3091 18.768 45.022 19.4857C46.8521 21.4953 47.9646 24.0431 47.9646 27.201C47.9646 38.2178 41.254 40.658 34.8664 41.3757C35.9071 42.2729 36.8043 43.9954 36.8043 46.6867C36.8043 50.5265 36.7684 53.6126 36.7684 54.5815C36.7684 55.3351 37.3066 56.2322 38.7421 55.9452C44.4411 54.021 49.3932 50.3583 52.9016 45.4723C56.4099 40.5864 58.2978 34.7233 58.2995 28.7082C58.2995 12.8469 45.4526 0 29.5913 0Z"
              fill="#94A3B8"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
}
