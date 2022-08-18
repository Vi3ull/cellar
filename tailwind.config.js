let plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`


module.exports = {
  content: [
    'layouts/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'content/**/*.htm',
    'partials/**/*.{htm,js}',
    'src/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'nunito': "Nunito, sans-serif",
      'jost': "Jost, sans-serif",
    },
    extend: {
      fontSize: {
        'xs': '.75rem',
        // 'sm': '.875rem',
        // 'tiny': '.875rem',
        'base': '1rem',
        // 'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        // '3xl': '1.875rem',
        '4xl': '2.25rem',
        // '5xl': '3rem',
        '6xl': '3.625rem',
        // '7xl': '5rem',
      },
      colors: {
        'clr-header': 'rgb(var(--clrHeader) / 1)',
        'clr-body': 'rgb(var(--clrBody) / 1)',
        'clr-footer': 'rgb(var(--clrFooter) / 1)',
        'clr-heading': 'rgb(var(--clrHeading) / 1)',
        'clr-text': 'rgb(var(--clrText) / 1)',
        'clr-link': 'rgb(var(--clrLink) / 1)',
        'clr-cta': 'rgb(var(--clrCta) / 1)',
        'clr-control': 'rgb(var(--clrControl) / 1)',
        'clr-selection': 'rgb(var(--clrSelection) / 1)',
        'clr-hover': 'rgb(var(--clrHover) / 1)',
        'clr-overlay': 'rgb(var(--clrOverlay) / 1)',
      },
      boxShadow: {
        'header': '0 10px 15px rgb(25 25 25 / 10%)',
        'card': '0 25px 35px rgb(68 162 255 / 10%)',
        'image': '0 15px 25px rgb(0 4 74 / 4%)',
        'brands': '0 15px 25px rgb(68 162 255 / 6%)',
        'testimonials': '0 15px 25px rgb(68 162 255 / 6%)',
      },
      backgroundImage: theme => ({
        'footer-texture': "url('../img/footer-texture.jpg')",
        'shape-one': "url('../img/shape-one.webp')",
        'shape-two': "url('../img/shape-two.webp')",
      }),
      spacing: {
        '1/10': '10%',
      },
      typography: theme => ({
				DEFAULT: {
					css: {
            h1: {
              fontFamily: theme('fontFamily.nunito'),
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(44, 16),
              color: theme('colors.bs-black'),
              lineHeight: theme('lineHeight.tight'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h2: {
              fontFamily: theme('fontFamily.nunito'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(36, 16),
              color: theme('colors.bs-black'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h3: {
              fontFamily: theme('fontFamily.nunito'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(24, 16),
              color: theme('colors.bs-black'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h4: {
              fontFamily: theme('fontFamily.nunito'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(20, 16),
              color: theme('colors.bs-black'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            p: {
              fontFamily: theme('fontFamily.jost'), 
              fontWeight: theme('fontWeight.normal'),
              fontSize: em(20, 16),
              color: theme('colors.bs-black-light'),
              lineHeight: theme('lineHeight.snug'),
            },
            span: {
              display: 'inline-block',
              fontFamily: theme('fontFamily.jost'), 
              fontWeight: theme('fontWeight.normal'),
              fontSize: em(12, 16),
              fontStyle: 'normal',
              color: theme('colors.clr-cta'),
              lineHeight: theme('lineHeight.snug'),
              textTransform: 'uppercase',
              letterSpacing: theme('letterSpacing.widest'),
              borderWidth: theme('borderWidth.DEFAULT'),
              borderStyle: theme('borderStyle.solid'),
              borderColor: theme('colors.clr-cta / 50'),
              borderRadius: theme('borderRadius.3xl'),
              backgroundColor: theme('colors.white'),
              paddingTop: theme('spacing.1'),
              paddingBottom: theme('spacing.1'),
              paddingLeft: theme('spacing.5'),
              paddingRight: theme('spacing.5'),
              marginRight: theme('spacing.2'),
            },
            a: {
              position: "relative",
              display: "inline-block",
              fontFamily: theme('fontFamily.jost'),
              fontSize: rem(16),
              fontWeight: theme('fontWeight.medium'),
              color: theme('colors.clr-link'),
              textDecoration: "none",
              cursor: "pointer",
              transition: "all .3s ease-out 0s",
              '&:before': {
                content: '""',
                position: "absolute",
                backgroundColor: theme('colors.clr-cta'),
                width: "100%",
                height: rem(2),
                bottom: rem(-12),
              },
              '&:hover': { 
                letterSpacing: rem(1) 
              },
            },
            '.caption': {
              display: 'inline-block',
              fontFamily: theme('fontFamily.jost'), 
              fontWeight: theme('fontWeight.normal'),
              fontSize: em(12, 16),
              color: theme('colors.clr-cta'),
              lineHeight: theme('lineHeight.snug'),
              textTransform: 'uppercase',
              letterSpacing: theme('letterSpacing.widest'),
              borderWidth: theme('borderWidth.DEFAULT'),
              borderStyle: theme('borderStyle.solid'),
              borderColor: theme('colors.clr-cta / 50'),
              borderRadius: theme('borderRadius.3xl'),
              backgroundColor: theme('colors.white'),
              paddingTop: theme('spacing.1'),
              paddingBottom: theme('spacing.1'),
              paddingLeft: theme('spacing.5'),
              paddingRight: theme('spacing.5'),
              marginRight: theme('spacing.2'),
            },
            '.title': {
              display: "inline-block",
              fontFamily: 'Nunito,sans-serif',
              fontWeight: 700,
              fontSize: rem(36),
              color: theme('colors.clr-heading'),
              letterSpacing: "1.25",
              marginBottom: rem(12),
            },
            ".subtitle": {
              display: "inline-block",
              fontFamily: 'Jost,sans-serif',
              fontSize: rem(12),
              fontWeight: 400,
              color: theme('colors.clr-cta'),
              textTransform: "uppercase",
              letterSpacing: em(1),
              marginBottom: rem(12),
            },
          },
				},
			})
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function ({ addVariant, addComponents, theme }) {
      addVariant('header--sticky', '&.header--sticky');
      addVariant('open', '&.open');
      addVariant('carousel-inited', '&.carousel--inited');
      addVariant('slide-active', '&.carousel-slide-active');
      addVariant('slide-next', '&.carousel-slide-next');
      addVariant('slide-prev', '&.carousel-slide-prev');  
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 var(--padding-x)',
          '@screen sm': {
            '--padding-x': 'calc(50vw - calc(50vw - 3.125%))',
          },
          '@screen lg': {
            '--padding-x': 'calc(50vw - calc(50vw - 6.25%))',
          },
          '@screen xl': {
            '--padding-x': 'calc(50vw - calc(50vw - 12.5%))',
          },
        },
        '.shape-one': {
          '&:after': {
            content: '""',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '50%',
            backgroundImage: theme('backgroundImage.shape-one'),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            zIndex: '-10'
          }
        },
        '.shape-two': {
          '&:before': {
            content: '""',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '50%',
            right: '0',
            backgroundImage: theme('backgroundImage.shape-two'),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            zIndex: '-10'
          }
        },
        '.link': {
          position: "relative",
          display: "inline-block",
          fontFamily: theme('fontFamily.jost'),
          fontSize: rem(16),
          fontWeight: theme('fontWeight.medium'),
          color: theme('colors.clr-link'),
          textDecoration: "none",
          cursor: "pointer",
          transition: "all .3s ease-out 0s",
          '&:before': {
            content: '""',
            position: "absolute",
            backgroundColor: theme('colors.clr-cta'),
            width: "100%",
            height: rem(2),
            bottom: rem(-12),
          },
          '&:hover': { 
            letterSpacing: rem(1) 
          },
        },
      })
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
