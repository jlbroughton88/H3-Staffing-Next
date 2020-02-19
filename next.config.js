const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withSass(withImages(withFonts({
    target: "serverless",
    env: {
        DOMAIN: process.env.DOMAIN,
        CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI
      },
      exportPathMap: function() {
        return {
          "/": { page: "/" }
        };
      },
      webpack: config => {
        return config;
      }
    // webpack (config, options) {
    //     config.module.rules.push({
    //         // test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
    //         // use: {
    //         //   loader: 'url-loader',
    //         //   options: {
    //         //     limit: 8192,
    //         //     publicPath: '/_next/static/',
    //         //     outputPath: 'static/',
    //         //     name: '[name].[ext]'
    //         //   }
    //         // }
    //     })
    //     return config;
    // }
})));