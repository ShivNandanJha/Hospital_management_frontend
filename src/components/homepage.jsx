import Feature from "../pages/feature";
import Faqs from "../pages/faqs";
import Contact from "./contact";
import herobanner from "../assets/herobanner.svg";
import CardGrid from "../pages/cardGrid";

export default function SpotlightPreview() {
  const sectionStyle = {
    backgroundImage: `url(${herobanner})`, // Define background image using imported variable
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <section className="relative -z-1" style={sectionStyle}>
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              We are Medico
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Multispeciality Hospital{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              where compassionate care meets medical excellence. Our mission is
              to provide the highest quality healthcare services to our
              community.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Contact Us →
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Get Appointment →
              </a>
            </div>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <h3 className="text-start p-2">Want a callback ? </h3>
              <form>
                <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
                  <div className="w-full pb-2 sm:pb-0">
                    <label
                      htmlFor="hs-hero-name-1"
                      className="block text-sm font-medium dark:text-white"
                    >
                      <span className="sr-only">Your name</span>
                    </label>
                    <input
                      type="text"
                      id="hs-hero-name-1"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="pt-2 sm:pt-0 sm:ps-3 border-t border-gray-200 sm:border-t-0 sm:border-s w-full dark:border-neutral-700">
                    <label
                      htmlFor="hs-hero-email-1"
                      className="block text-sm font-medium dark:text-white"
                    >
                      <span className="sr-only">Your email address</span>
                    </label>
                    <input
                      type="email"
                      id="hs-hero-email-1"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Your number"
                    />
                  </div>
                  <div className="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
                    <a
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Submit
                    </a>
                  </div>
                </div>
              </form>

              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width="347"
                  height="188"
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h3 className="font-semibold text-sm text-gray-600 text-center">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h3>
          <div className="mt-6">
            <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
              {/* LOGO 1 */}
              <li className="flex-none">
                <svg
                  width="108"
                  height="72"
                  viewBox="0 0 108 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90.5171 6.36532C88.4872 4.34733 86.077 2.74651 83.4243 1.65433C80.7715 0.562149 77.9282 0 75.0568 0C72.1853 0 69.342 0.562149 66.6893 1.65433C64.0366 2.74651 61.6264 4.34733 59.5964 6.36532L55.3836 10.5514L51.1707 6.36532C47.0704 2.29103 41.5092 0.00211185 35.7104 0.00211189C29.9117 0.00211194 24.3504 2.29103 20.2501 6.36532C16.1497 10.4396 13.8462 15.9655 13.8462 21.7275C13.8462 27.4894 16.1497 33.0153 20.2501 37.0896L24.4629 41.2757L55.3836 72L86.3043 41.2757L90.5171 37.0896C92.548 35.0726 94.159 32.6777 95.2582 30.0418C96.3574 27.4059 96.9231 24.5807 96.9231 21.7275C96.9231 18.8743 96.3574 16.049 95.2582 13.4131C94.159 10.7772 92.548 8.38237 90.5171 6.36532Z"
                    fill="url(#paint0_linear_1_49)"
                  />
                  <g filter="url(#filter0_b_1_49)">
                    <path
                      d="M45 52.6155C44.2109 52.6147 43.4358 52.4064 42.7526 52.0115C42.0694 51.6166 41.5021 51.049 41.1075 50.3656L33.435 36.5734L28.53 43.9307C28.1079 44.5395 27.542 45.0346 26.8826 45.3721C26.2232 45.7097 25.4907 45.8792 24.75 45.8657H4.5C3.30653 45.8657 2.16193 45.3916 1.31802 44.5477C0.474106 43.7038 0 42.5592 0 41.3658C0 40.1723 0.474106 39.0278 1.31802 38.1839C2.16193 37.34 3.30653 36.8659 4.5 36.8659H22.3425L30.015 25.3686C30.4436 24.7281 31.0297 24.2083 31.7169 23.8592C32.4041 23.5101 33.1694 23.3434 33.9396 23.375C34.7097 23.4066 35.4588 23.6355 36.1151 24.0398C36.7714 24.444 37.3128 25.0101 37.6875 25.6836L45 39.1158L56.7675 18.8663C57.1696 18.1695 57.7511 17.5933 58.4515 17.1976C59.152 16.8019 59.9457 16.6012 60.75 16.6163C61.5353 16.6211 62.3057 16.8313 62.9846 17.226C63.6636 17.6207 64.2273 18.1862 64.62 18.8663L75.3975 36.8659L79.8975 33.311C80.6951 32.6919 81.6778 32.3591 82.6875 32.366H103.5C104.693 32.366 105.838 32.8401 106.682 33.684C107.526 34.5279 108 35.6724 108 36.8659C108 38.0593 107.526 39.2039 106.682 40.0478C105.838 40.8917 104.693 41.3658 103.5 41.3658H84.2625L76.95 47.1482C76.4462 47.5626 75.8582 47.8626 75.2269 48.0272C74.5956 48.1919 73.9361 48.2173 73.294 48.1017C72.6519 47.9862 72.0426 47.7324 71.5084 47.3579C70.9741 46.9835 70.5277 46.4973 70.2 45.9332L60.75 29.981L48.8925 50.3656C48.4979 51.049 47.9306 51.6166 47.2474 52.0115C46.5642 52.4064 45.7891 52.6147 45 52.6155Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_1_49"
                      x="-25"
                      y="-8.38446"
                      width="158"
                      height="86"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_49"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_49"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_49"
                      x1="13.8462"
                      y1="33.6"
                      x2="94.9315"
                      y2="34.0175"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF7070" />
                      <stop offset="1" stopColor="#FF7070" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                </svg>
              </li>

              {/* LOGO 2 */}
              <li className="flex-none">
                <svg
                  width="92"
                  height="84"
                  viewBox="0 0 92 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 25.7452V63.1361C0 68.8723 4.65013 73.5225 10.3864 73.5225H81.0136C86.7498 73.5225 91.3999 68.8723 91.3999 63.1361V47.9597C91.3999 45.3317 90.4037 42.8014 88.612 40.8788L67.9105 18.6643C65.9458 16.5561 63.1937 15.3589 60.312 15.3589H10.3864C4.65013 15.3589 0 20.009 0 25.7452Z"
                    fill="url(#paint0_linear_1_27)"
                  />
                  <g filter="url(#filter0_b_1_27)">
                    <path
                      d="M39.4682 23.6682C38.3663 23.6682 37.3096 23.2305 36.5305 22.4514C35.7513 21.6723 35.3136 20.6155 35.3136 19.5137V9.12732H22.85V19.5137C22.85 20.6155 22.4123 21.6723 21.6332 22.4514C20.854 23.2305 19.7973 23.6682 18.6955 23.6682C17.5936 23.6682 16.5369 23.2305 15.7578 22.4514C14.9786 21.6723 14.5409 20.6155 14.5409 19.5137V9.12732C14.5409 6.92361 15.4163 4.81017 16.9746 3.25191C18.5329 1.69366 20.6463 0.818237 22.85 0.818237H35.3136C37.5173 0.818237 39.6308 1.69366 41.189 3.25191C42.7473 4.81017 43.6227 6.92361 43.6227 9.12732V19.5137C43.6227 20.6155 43.185 21.6723 42.4059 22.4514C41.6268 23.2305 40.57 23.6682 39.4682 23.6682Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter1_b_1_27)">
                    <circle
                      cx="22.85"
                      cy="73.5229"
                      r="10.3864"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter2_b_1_27)">
                    <circle
                      cx="66.4726"
                      cy="73.5229"
                      r="10.3864"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter3_b_1_27)">
                    <path
                      d="M14.5409 38.2089V46.518H35.3136V38.2089H14.5409Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                  <g filter="url(#filter4_b_1_27)">
                    <path
                      d="M20.7728 52.7498H29.0818L29.0818 31.9771H20.7728V52.7498Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_1_27"
                      x="-10.4591"
                      y="-24.1818"
                      width="79.0818"
                      height="72.85"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_27"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_27"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_1_27"
                      x="-12.5363"
                      y="38.1366"
                      width="70.7727"
                      height="70.7727"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_27"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_27"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter2_b_1_27"
                      x="31.0863"
                      y="38.1366"
                      width="70.7727"
                      height="70.7727"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_27"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_27"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter3_b_1_27"
                      x="-10.4591"
                      y="13.2089"
                      width="70.7727"
                      height="58.3091"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_27"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_27"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter4_b_1_27"
                      x="-4.22725"
                      y="6.97711"
                      width="58.3091"
                      height="70.7727"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_27"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_27"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_27"
                      x1="-4.90026e-07"
                      y1="42.5019"
                      x2="89.2067"
                      y2="43.1274"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#AA80FF" />
                      <stop offset="1" stopColor="#A071FF" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                </svg>
              </li>

              {/* LOGO 3 */}
              <li className="flex-none">
                <svg
                  width="80"
                  height="78"
                  viewBox="0 0 80 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.9998 4.55662C57.0748 -1.51839 66.9243 -1.51839 72.9993 4.55663C79.0744 10.6316 79.0744 20.4812 72.9993 26.5562L26.5558 72.9997C20.4808 79.0747 10.6313 79.0747 4.55626 72.9997C-1.51875 66.9247 -1.51875 57.0752 4.55626 51.0001L50.9998 4.55662Z"
                    fill="url(#paint0_linear_1_87)"
                  />
                  <g filter="url(#filter0_b_1_87)">
                    <path
                      d="M75.4437 50.9998C81.5188 57.0748 81.5188 66.9243 75.4437 72.9994C69.3687 79.0744 59.5192 79.0744 53.4442 72.9994L7.00065 26.5558C0.925643 20.4808 0.925645 10.6313 7.00066 4.55626C13.0757 -1.51875 22.9252 -1.51875 29.0002 4.55626L75.4437 50.9998Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <circle
                    cx="40"
                    cy="30.8335"
                    r="3.88901"
                    transform="rotate(45 40 30.8335)"
                    fill="white"
                  />
                  <circle
                    cx="30.8335"
                    cy="39.9996"
                    r="3.88901"
                    transform="rotate(45 30.8335 39.9996)"
                    fill="white"
                  />
                  <circle
                    cx="49.1665"
                    cy="39.9996"
                    r="3.88901"
                    transform="rotate(45 49.1665 39.9996)"
                    fill="white"
                  />
                  <circle
                    cx="40"
                    cy="49.1664"
                    r="3.88901"
                    transform="rotate(45 40 49.1664)"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1_87"
                      x="-22.5556"
                      y="-25"
                      width="127.556"
                      height="127.556"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_87"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_87"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_87"
                      x1="-4.15802e-07"
                      y1="36.193"
                      x2="75.6968"
                      y2="36.5308"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF7070" />
                      <stop offset="1" stopColor="#FF7070" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                </svg>
              </li>

              {/* LOGO 4 */}
              <li className="flex-none">
                <svg
                  width="85"
                  height="85"
                  viewBox="0 0 85 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.5 77.2727C61.7044 77.2727 77.2727 61.7044 77.2727 42.5C77.2727 23.2955 61.7044 7.72723 42.5 7.72723C23.2955 7.72723 7.72723 23.2955 7.72723 42.5C7.72723 61.7044 23.2955 77.2727 42.5 77.2727Z"
                    fill="url(#paint0_linear_1_113)"
                  />
                  <g filter="url(#filter0_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42.5 0C44.6338 0 46.3636 1.72981 46.3636 3.86364V11.5909C46.3636 13.7247 44.6338 15.4545 42.5 15.4545C40.3662 15.4545 38.6364 13.7247 38.6364 11.5909V3.86364C38.6364 1.72981 40.3662 0 42.5 0Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter1_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42.5 69.5455C44.6338 69.5455 46.3636 71.2753 46.3636 73.4091V81.1364C46.3636 83.2702 44.6338 85 42.5 85C40.3662 85 38.6364 83.2702 38.6364 81.1364V73.4091C38.6364 71.2753 40.3662 69.5455 42.5 69.5455Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter2_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7226 12.7226C14.2314 11.2137 16.6777 11.2137 18.1866 12.7226L22.0502 16.5862C23.5591 18.0951 23.5591 20.5414 22.0502 22.0502C20.5414 23.5591 18.0951 23.5591 16.5862 22.0502L12.7226 18.1866C11.2137 16.6777 11.2137 14.2314 12.7226 12.7226Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter3_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.9498 62.9499C64.4587 61.441 66.905 61.441 68.4138 62.9499L72.2775 66.8135C73.7863 68.3224 73.7863 70.7687 72.2775 72.2775C70.7686 73.7864 68.3223 73.7864 66.8134 72.2775L62.9498 68.4139C61.441 66.905 61.441 64.4587 62.9498 62.9499Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter4_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 42.4999C0 40.3661 1.72981 38.6363 3.86364 38.6363H11.5909C13.7247 38.6363 15.4545 40.3661 15.4545 42.4999C15.4545 44.6338 13.7247 46.3636 11.5909 46.3636H3.86364C1.72981 46.3636 0 44.6338 0 42.4999Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter5_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M69.5455 42.4999C69.5455 40.3661 71.2753 38.6363 73.4091 38.6363H81.1364C83.2702 38.6363 85 40.3661 85 42.4999C85 44.6338 83.2702 46.3636 81.1364 46.3636H73.4091C71.2753 46.3636 69.5455 44.6338 69.5455 42.4999Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter6_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.0502 62.9499C23.5591 64.4587 23.5591 66.905 22.0502 68.4139L18.1866 72.2775C16.6777 73.7864 14.2314 73.7864 12.7226 72.2775C11.2137 70.7687 11.2137 68.3224 12.7226 66.8135L16.5862 62.9499C18.0951 61.441 20.5414 61.441 22.0502 62.9499Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <g filter="url(#filter7_b_1_113)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M72.2775 12.7226C73.7863 14.2314 73.7863 16.6777 72.2775 18.1866L68.4138 22.0502C66.905 23.5591 64.4587 23.5591 62.9498 22.0502C61.441 20.5414 61.441 18.0951 62.9498 16.5862L66.8134 12.7226C68.3223 11.2137 70.7686 11.2137 72.2775 12.7226Z"
                      fill="white"
                      fillOpacity="0.2"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_1_113"
                      x="13.6364"
                      y="-25"
                      width="57.7273"
                      height="65.4545"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_b_1_113"
                      x="13.6364"
                      y="44.5455"
                      width="57.7273"
                      height="65.4545"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter2_b_1_113"
                      x="-13.4091"
                      y="-13.4091"
                      width="61.5909"
                      height="61.5909"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter3_b_1_113"
                      x="36.8182"
                      y="36.8182"
                      width="61.5909"
                      height="61.5909"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter4_b_1_113"
                      x="-25"
                      y="13.6363"
                      width="65.4545"
                      height="57.7273"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter5_b_1_113"
                      x="44.5455"
                      y="13.6363"
                      width="65.4545"
                      height="57.7273"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter6_b_1_113"
                      x="-13.4091"
                      y="36.8182"
                      width="61.5909"
                      height="61.5909"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter7_b_1_113"
                      x="36.8182"
                      y="-13.4091"
                      width="61.5909"
                      height="61.5909"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="12.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1_113"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1_113"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_113"
                      x1="7.72723"
                      y1="40.1818"
                      x2="75.6059"
                      y2="40.4847"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F99462" />
                      <stop offset="1" stopColor="#F99462" stopOpacity="0.65" />
                    </linearGradient>
                  </defs>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CardGrid />
      <Feature />
      <Faqs />
      <Contact />
    </div>
  );
}
