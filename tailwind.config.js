module.exports = {
    purge: { //only need to purge during build, during develop we can keep all styles.
      //enabled: true,
      content: [
      './src/**/*.html',
      './src/**/*.vue',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  