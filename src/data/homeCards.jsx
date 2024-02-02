import {
  RocketLaunchIcon,
  GlobeAltIcon,
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
const svgVite = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2rem" viewBox="0 0 128 128">
    <defs>
      <linearGradient
        id="a"
        x1="6"
        x2="235"
        y1="33"
        y2="344"
        gradientTransform="translate(0 .937) scale(.3122)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#41d1ff" />
        <stop offset="1" stopColor="#bd34fe" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="194.651"
        x2="236.076"
        y1="8.818"
        y2="292.989"
        gradientTransform="translate(0 .937) scale(.3122)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffea83" />
        <stop offset=".083" stopColor="#ffdd35" />
        <stop offset="1" stopColor="#ffa800" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"
    />
    <path
      fill="url(#b)"
      d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"
    />
  </svg>
);
const svgReact = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2rem"
    height="2rem"
    viewBox="0 0 128 128"
  >
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
    </g>
  </svg>
);

const svgTailwind = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2rem"
    height="2rem"
    viewBox="0 0 128 128"
  >
    <path
      d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
      fill="#38bdf8"
    />
  </svg>
);
const svgVercel = (
  <svg
    fill="#ffff"
    width="2rem"
    height="2rem"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffff"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      <path fillRule="evenodd" d="M256,48,496,464H16Z" />
    </g>
  </svg>
);

export const homeCards = [
  {
    id: 1,
    cardSize: "lg",
    css: {
      size: "w-11/12 xl:w-[45rem] xl:h-[25rem] sm:w-[30rem] lg:h-[25rem] 2xl:w-[60rem] 2xl:h-[30rem]",
      position: "md:top-[15rem] md:right-10 lg:top-[12rem] 2xl:top-[25rem]",
      color: "bg-slate-300",
    },
    content: {
      image: "image1.png",
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum officiis praesentium maiores eos cupiditate sed.",
    },
    icons: [
      {
        icon: <RocketLaunchIcon className={`h-6 w-6`} />,
        color: "text-green-700 bg-green-400 shadow-green-700/100",
        size: "w-10 h-10 rounded-full",
        text: "Lorem ipsum dolor sit amet.",
      },
      {
        icon: <GlobeAltIcon className={`h-6 w-6`} />,
        color: "text-green-700 bg-green-400 shadow-green-700/100",
        size: "w-10 h-10 rounded-full",
        text: "Lorem ipsum dolor sit amet.",
      },
      {
        icon: <BuildingStorefrontIcon className={`h-6 w-6`} />,
        color: "text-green-700 bg-green-400 shadow-green-700/100",
        size: "w-10 h-10 rounded-full",
        text: "Lorem ipsum dolor sit amet.",
      },
      {
        icon: <DevicePhoneMobileIcon className={`h-6 w-6`} />,
        color: "text-green-700 bg-green-400 shadow-green-700/100",
        size: "w-10 h-10 rounded-full",
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
    order: 10,
  },
  {
    id: 2,
    cardSize: "lg",
    css: {
      size: "w-11/12 xl:w-[45rem] xl:h-[25rem] sm:w-[30rem] sm:h-auto 2xl:w-[60rem] 2xl:h-[30rem]",
      position: "md:top-10 md:left-20",
      color: "bg-slate-200",
    },
    content: {
      image: "image2.png",
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum officiis praesentium maiores eos cupiditate sed.",
    },
    icons: [
      {
        icon: <RocketLaunchIcon className={`h-6 w-6`} />,
        color: "text-blue-700 bg-blue-400 shadow-blue-700/100",
        size: "w-10 h-10 rounded-full",
        text: "Lorem ipsum dolor sit amet.",
      },
      {
        icon: <RocketLaunchIcon className={`h-6 w-6`} />,
        color: "text-blue-700 bg-blue-400 shadow-blue-700/100",
        size: "w-10 h-10 rounded-full",
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
    order: 20,
  },
  {
    id: 3,
    cardSize: "sm",
    css: {
      size: "w-11/12 h-auto sm:w-[25rem] sm:h-auto md:w-[35rem] md:h-[22rem] 2xl:w-[60rem] 2xl:h-[25rem]",
      position:
        "sm:bottom-20 sm:right-[10rem] md:top-[10rem] md:right-[5rem] lg:left-[15rem] xl:left-[20rem] 2xl:left-[30rem] 2xl:top-[15rem]",
      color: "bg-white",
    },
    content: {
      image: "image3.png",
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit harum officiis praesentium maiores.",
    },
    icons: [
      {
        icon: svgVite,
        color: "bg-violet-300 shadow-violet-500/100",
        size: "w-10 h-12 rounded-lg",
        text: "",
      },
      {
        icon: svgReact,
        color: "bg-zinc-800 shadow-zinc-900/100",
        size: "w-10 h-12 rounded-lg",
        text: "",
      },
      {
        icon: svgTailwind,
        color: "bg-sky-950 shadow-sky-800/100",
        size: "w-10 h-12 rounded-lg",
        text: "",
      },
      {
        icon: svgVercel,
        color: "bg-black shadow-gray-700/100",
        size: "w-10 h-12 rounded-lg",
        text: "",
      },
    ],
    order: 30,
  },
];

export const orderCardCSS = [
  {
    zIndex: "z-10",
    cardBg: "bg-white bg-rgba-dark-5 shadow-sm",
    cardUp: false,
  },
  {
    zIndex: "z-20",
    cardBg: "bg-white bg-rgba-dark-3 shadow-md",
    cardUp: false,
  },
  { zIndex: "z-30", cardBg: "bg-white shadow-lg", cardUp: true },
];

export const sizeCard = (cardSize) => {
  if (cardSize === "sm") {
    return {
      textSize: "text-lg md:text-2xl",
      flex: "flew-row",
      imgSize: "w-[10rem] xl:w-[10rem]",
    };
  } else {
    return {
      textSize: "text-lg sm:text-xl xl:text-4xl",
      flex: "flex-row xl:flex-col",
      imgSize: "w-[15rem] xl:w-[20rem]",
    };
  }
};

export const getColorBtn = (cardUp) =>
  cardUp
    ? "bg-blue-400 text-white cursor-auto shadow-lg shadow-blue-200/100"
    : "bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-gray-100 shadow-lg shadow-gray-200/100";
