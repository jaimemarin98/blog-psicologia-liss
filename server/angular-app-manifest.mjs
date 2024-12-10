
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/section1",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/section1"
  },
  {
    "renderMode": 2,
    "route": "/section2"
  },
  {
    "renderMode": 2,
    "route": "/section3"
  },
  {
    "renderMode": 2,
    "route": "/section4"
  },
  {
    "renderMode": 2,
    "route": "/section5"
  }
],
  assets: {
    'index.csr.html': {size: 7766, hash: 'fbab4203fb08194da2cf8fe0c0bc592e06fff1b9b29b5144a053c3d466673629', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3577, hash: '6801542acc566ac717b363a13f24de2e561c184fc8052ab2884c26b825b61702', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'section2/index.html': {size: 49618, hash: '940d89340d9f5b070c3bd9940cb3bce6ec264ee2aa37a6441e54fb40616185be', text: () => import('./assets-chunks/section2_index_html.mjs').then(m => m.default)},
    'section3/index.html': {size: 49618, hash: '940d89340d9f5b070c3bd9940cb3bce6ec264ee2aa37a6441e54fb40616185be', text: () => import('./assets-chunks/section3_index_html.mjs').then(m => m.default)},
    'section4/index.html': {size: 49618, hash: '940d89340d9f5b070c3bd9940cb3bce6ec264ee2aa37a6441e54fb40616185be', text: () => import('./assets-chunks/section4_index_html.mjs').then(m => m.default)},
    'section5/index.html': {size: 49618, hash: '940d89340d9f5b070c3bd9940cb3bce6ec264ee2aa37a6441e54fb40616185be', text: () => import('./assets-chunks/section5_index_html.mjs').then(m => m.default)},
    'section1/index.html': {size: 49618, hash: '940d89340d9f5b070c3bd9940cb3bce6ec264ee2aa37a6441e54fb40616185be', text: () => import('./assets-chunks/section1_index_html.mjs').then(m => m.default)},
    'styles-7C65PJPW.css': {size: 236422, hash: 'QmDobwLlRdc', text: () => import('./assets-chunks/styles-7C65PJPW_css.mjs').then(m => m.default)}
  },
};
