// 多模块独立配置
var importModules = [
  new MultiModule('pdas', {
    port: 8081,
    statics: ['static1'],
    proxyTable: {
      '/servers1/':getProxyConfig(PROXY_DOMAIN_DEFAULT)
    }
  }),
  // new MultiModule('css', {
  //   port: 8082,
  //   statics: ['static2'],
  //   proxyTable: {
  //     '/servers2/':getProxyConfig(PROXY_DOMAIN_DEFAULT)
  //   }
  // }),
  // new MultiModule('dsp', {
  //   port: 8083,
  //   statics: ['static3'],
  //   proxyTable: {
  //     '/servers3/':getProxyConfig(PROXY_DOMAIN_DEFAULT)
  //   }
  // }),
]