module.exports = function (context, options) {
  return {
    name: 'webpack-filter',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          fallback: {
            // postman-code-generators uses Node.js built-ins not available in the browser
            path: false,
          },
        },
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
    },
  };
};
