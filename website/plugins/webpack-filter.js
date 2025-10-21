module.exports = function (context, options) {
  return {
    name: 'webpack-filter',
    configureWebpack(config, isServer, utils) {
      // Only apply in development mode
      //if (process.env.NODE_ENV === 'development') {
        return {
          devServer: {
            client: {
              overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: (error) => {
                  // Filter out the ResizeObserver loop error
                  if (error.message === 'ResizeObserver loop completed with undelivered notifications.') {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
        };
      //}
    },
  };
};