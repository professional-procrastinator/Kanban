import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      GTWalshiem:
        'GTWalshiem, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
    },
    colors: {
      sidebar: '#ffffff',
      separator: '#E9EBEF',
      iconBackground: '#F5F5F5',
      activeIconBorder: '#533BE5',
    },
  },
});
