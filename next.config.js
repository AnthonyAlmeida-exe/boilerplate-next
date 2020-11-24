const withPWA = required('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa:{
    dest: 'public',
    disable:!isProd
  }
})
