const deviceSizes = {
  smallMobile: 480,
  tablet: 768,
  laptop: 1279,
  larger: 1280,
};

const DEVICE = {
  // smaller mobile : 0 ~ 480px (참고. 애플 아이폰 13미니의 가로는 64.2mm(243px))
  smallMobile: `screen and (max-width: ${deviceSizes.smallMobile}px)`,
  // mobile & smaller tablet  : 481 ~ 768px
  tablet: `screen and (min-width: ${
    deviceSizes.smallMobile + 1
  }px) and (max-width: ${deviceSizes.tablet2}px)`,
  //  larger tablet & laptop & small desktop: 769 ~ 1279px
  laptop: `screen and (min-width: ${
    deviceSizes.tablet2 + 1
  }px) and (max-width: ${deviceSizes.laptop}px)`,
  // larger desktop ~ monitors: 1280+
  larger: `screen and (min-width: ${
    deviceSizes.laptop + 1
  }px) and (min-width: ${deviceSizes.larger}px)`,
};

const COLORS = {
  primary: {
    /* theme colors */
    skyBlue: "#67B5FA",
    /* instagram gradient colors */
    purple: "#8405FF",
    pink: "#F800D8",
    red: "#FF006C",
    yellow: "#FFCB00",
  },
  font: "#0F0F0F",
  error: "#EC0707",
  access: "#28D464",
  white: "#FFFFFF",
  black: "#0F0F0F",
  gray: {
    100: "#FAFAFA",
    200: "#EFEFEF",
    300: "#CACACA",
    500: "#828282",
  },
};

const FONT_SIZE = {
  extraSmall: "12px",
  small: "14px",
  medium: "16px",
  large: "20px",
};

const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
};

const theme = {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  DEVICE,
};

export default theme;
