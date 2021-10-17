module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/recipe-app/'
  : '/',
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'HomeChef | Become Your Own Chef',
    },
  }
}

