const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const path = require("path");
const withFonts = require("next-fonts");

module.exports = withSass(withImages(withFonts({
    target: "serverless",
    env: {
        DOMAIN: process.env.DOMAIN,
        CLIENT_ID: process.env.CLIENT_ID,
        REDIRECT_URI: process.env.REDIRECT_URI,
        H3_HOST: process.env.H3_HOST, 
        H3_USERNAME: process.env.H3_USERNAME, 
        H3_PASSWORD: process.env.H3_PASSWORD, 
        H3_DATABASE: process.env.H3_DATABASE
      },
      exportPathMap: function() {
        return {
          "/": { page: "/" },
          "/jobs": { page: "/jobs" },
          "/profile": { page: "/profile" },
          "/blog": { page: "/blog" },
          "/blog/all": { page: "/blog/all" },
          "/blog/[uid]": { page: "/blog/[uid]" }
        };
      },
      webpack(config, options) {
        
        return config;
      }
})));