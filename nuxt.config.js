export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '好室 Hotel',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: '住宿,旅遊,旅館,預約,House Hotel, 好室旅館, 好室, 好室 Hotel' },
      { hid: 'description', name: 'description', content: 'House Hotel - 住宿預約頁面' },
      { name: 'distribution', content: 'Taiwan' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/all.scss',
    '@/assets/scss/datePicker/index.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/bootstrap.js',
      ssr: false,
    },
    {
      src: '@/plugins/datepicker.js',
      ssr: false,
    },
    '@/filter/service.js',
    '@/filter/currency.js',
    '@/filter/detailCn.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6',
    headers: {
      Authorization: 'Bearer kiMRMBdi0BsO5oxWQclW7LUAJiEMqGrsmXS7DyTSv1eU7HT5lLw6dqXHkdl8',
      Accept: 'application/json',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
};
