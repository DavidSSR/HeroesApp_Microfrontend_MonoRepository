const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "mfAuth": "http://localhost:4201/remoteEntry.js",
    "mfHeroes": "http://localhost:4202/remoteEntry.js",
    "mfShared": "http://localhost:4203/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
