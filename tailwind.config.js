/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    important: true,
    
    theme: {
          fontFamily: {
           sans: ['DM Sans', "sans-serif"]
        },
      extend: {},
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#FFFFFF",
        primary: "#A7C7E7",
        darker: "#090f1a",
        red: {
          50: "#FEF2F4",
          100: "#FEE2E6",
          200: "#FECAD1",
          300: "#F28F9D",
          400: "#F96277",
          500: "#E9586B",
          600: "#D63D52",
          700: "#B53042",
          800: "#8A2230",
          900: "#601B24"
        },
        green: {
          50: "#ECFDF7",
          100: "#D1FAEB",
          200: "#A7F3D7",
          300: "#4EE4AD",
          400: "#36D99E",
          500: "#15BD7F",
          600: "#078D5C",
          700: "#047249",
          800: "#045336",
          900: "#023723"
        },
        yellow: {
          50: "#FFF9EB",
          100: "#FEEDC7",
          200: "#FAE3B2",
          300: "#FED786",
          400: "#FFD170",
          500: "#F7C24E",
          600: "#EEAA27",
          700: "#D18708",
          800: "#A16205",
          900: "#4C2F03"
        },
        orange: {
          50: "#FFF4ED",
          100: "#FFE4D5",
          200: "#FEC9AA",
          300: "#FDA674",
          400: "#FF995E",
          500: "#F7823F",
          600: "#EB6B22",
          700: "#CD5510",
          800: "#9A3E0A",
          900: "#682600"
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          150: "#EBEDF0",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          850: "#161D2B",
          900: "#111827"
        },
        blue: {
          50: "#F3F4FF",
          100: "#DADEFE",
          200: "#A3ACFE",
          300: "#7E8BFD",
          400: "#596AFC",
          500: "#4759FC",
          600: "#3947CA",
          700: "#2B3597",
          800: "#242D7E",
          900: "#151B4C"
        },
        violet: {
          50: "#F9F0FF",
          100: "#E9CDFD",
          200: "#DBACFC",
          300: "#CD8BFA",
          400: "#BE6AF9",
          500: "#B759F8",
          600: "#A550DF",
          700: "#6E3595",
          800: "#492463",
          900: "#371B4A"
        },
        teal: {
          100: "#e6fffa",
          200: "#b2f5ea",
          300: "#81e6d9",
          400: "#4fd1c5",
          500: "#38b2ac",
          600: "#319795",
          700: "#2c7a7b",
          800: "#285e61",
          900: "#234e52"
        },
        indigo: {
          100: "#ebf4ff",
          200: "#c3dafe",
          300: "#a3bffa",
          400: "#7f9cf5",
          500: "#667eea",
          600: "#5a67d8",
          700: "#4c51bf",
          800: "#434190",
          900: "#3c366b"
        },
        purple: {
          100: "#faf5ff",
          200: "#e9d8fd",
          300: "#d6bcfa",
          400: "#b794f4",
          500: "#9f7aea",
          600: "#805ad5",
          700: "#6b46c1",
          800: "#553c9a",
          900: "#44337a"
        },
        pink: {
          100: "#fff5f7",
          200: "#fed7e2",
          300: "#fbb6ce",
          400: "#f687b3",
          500: "#ed64a6",
          600: "#d53f8c",
          700: "#b83280",
          800: "#97266d",
          900: "#702459"
        }
      },
      screens: {
        xxs: "320px",
        xs: "425px",
        sm: "641px",
        md: "768px",
        tablet: "821px",
        md2: "901px",
        md3: "960px",
        md4: "1001px",
        lg: "1024px",
        lg2: "1151px",
        xl: "1281px",
        "2xl": "1536px",
        "7xl": "1300px",
        "8xl": "1440px"
      },
      maxWidth: {
        'sm': '568px',
        'md': '768px',
        'lg': '1024px',
        "normal": '1152px',
        'xl': '1280px',
        'full': '100%',
        'screen': '100vw'
      },
      minWidth: {
        icon: "100px",
        tableRow: "150px"
      },
  
      boxShadow: {
        none: "0px 25px 50px -12px rgba(0,0,0,0)",
        custom: "0px 25px 50px -12px rgba(0,0,0,0.08)",
        medium: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      },
  
      fontSize: {
        xs: ["12px", { letterSpacing: "0.032px", lineHeight: "16px" }],
        sm: ["14px", { letterSpacing: "0.064px", lineHeight: "24px" }],
        s: ["16px", { letterSpacing: "0.064px", lineHeight: "32px" }],
        base: ["16px", { letterSpacing: "0.064px", lineHeight: "32px" }],
        md: ["18px", { letterSpacing: "0.08px", lineHeight: "32px" }],
        lg: ["20px", { letterSpacing: "0.08px", lineHeight: "32px" }],
        xl: ["22px", { letterSpacing: "0.08px", lineHeight: "32px" }],
        xxl: ["28px", { letterSpacing: "0.08px", lineHeight: "32px" }],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["2rem", "2.5rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"]
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  };