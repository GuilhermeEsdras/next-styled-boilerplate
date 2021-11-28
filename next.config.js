const withPwa = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPwa({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
  reactStrictMode: true,
});
