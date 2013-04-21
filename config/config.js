module.exports = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Event Node'
      },
      db: 'mongodb://localhost/event?poolSize=5',
      listenPort: 10443,
      authTokenTTL: 60 * 20,
      verifyPurchases: false,
      issueCacheEnabled: true,
      issueCacheTTL: 60 * 60,
      accessCacheEnabled: true,
      accessCacheTTL: 60 * 3,
      hashSecret: 'hdfjkghskjfdhgkljfdsoi*dsgjs)(*hjgdfhjghkdfhg'
    }
}