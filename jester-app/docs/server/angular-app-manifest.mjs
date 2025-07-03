
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/jester.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/jester.github.io"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 564, hash: 'd7581958e228e315715085852b0ff536c0b551e7f406cf13ea345652b07321c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1078, hash: '9490f848601e5fb78a5fab0608c8ed8142b9548014af58af893437e58b92fc2a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2149, hash: '979e77059e7242a2b40fe93392ed49be26362b51779cf07288773ecb829000a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
