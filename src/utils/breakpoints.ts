export const deviceWidth = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const breakpoint = {
  mobileS: `(min-width: ${deviceWidth.mobileS})`,
  mobileM: `(min-width: ${deviceWidth.mobileM})`,
  mobileL: `(min-width: ${deviceWidth.mobileL})`,
  tablet: `(min-width: ${deviceWidth.tablet})`,
  laptop: `(min-width: ${deviceWidth.laptop})`,
  laptopL: `(min-width: ${deviceWidth.laptopL})`,
  desktop: `(min-width: ${deviceWidth.desktop})`,
  desktopL: `(min-width: ${deviceWidth.desktop})`
};
