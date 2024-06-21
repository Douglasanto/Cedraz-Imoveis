import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    backgroundImage: {
      'img_bg_hero': "url('../assets/CasaHome.svg')",
      },
          extend: {
        colors: {
       'primary': '#9f8459',
       'second': '#17243e',
       'BGWhite': '#E6E6E6',
       'three': '#041318',
       'card': '#0F313A',
       'Carosel': '#004A49'
     },
       animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },  
    },
 fontFamily: {
        myriad: ["var(--font-myriad)", "sans-serif"],
        myriadBold: ["var(--font-myriad-bold)", "sans-serif"]
      },
  },
 plugins: [],
};

export default config;
