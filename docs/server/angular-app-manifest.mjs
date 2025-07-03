
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
    'index.csr.html': {size: 570, hash: '311f3d9912fac940193250a5211092c93d256c719fe31201c4ce540c95c38550', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1084, hash: '2af390669e031ff119a1326c90414d6101f74256ee7bdbdb4bf82313b74287a8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4366, hash: '6b5429ec7dcbf5630a84c383698abaf23381eb9e4df9b9d4261e69aff1f9778e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
