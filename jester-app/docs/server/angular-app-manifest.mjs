
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gonzales1113.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gonzales1113.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 570, hash: '22041ada346f81e893b770cf871393865d42b2529cf8ea910b5f95791d35b3ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1084, hash: 'ff4a9f7b1edc65640358b17ec9b6a93b7ce11bc65f78cc9e371bdce02662bfc5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2155, hash: 'b24e933e4f742ab9ae1aedf2fccf4b5ff54c5607b4c237c39da1a67fc20a4866', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
