/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    poweredByHeader:false,
    images: {
      domains: [
        'easycampus.co.in',
        'media.licdn.com',
        'ec-logo.s3.amazonaws.com',
        'ec-logo.s3.ap-south-1.amazonaws.com',
        'ec-sign.s3.ap-south-1.amazonaws.com',
        'ec-sign.s3.amazonaws.com',
        'www.rahulbalodacampuslogourl.com',
        'example.com',
        'www.w3.org',
        '181.215.78.82:3000', 
        'easycampus-dev-images.s3.ap-south-1.amazonaws.com',
        'affiliated-certificate.s3.ap-south-1.amazonaws.com',
        'affiliated-certificate.s3.amazonaws.com',
        'easycampus-dev-images.s3.amazonaws.com',
        'testpictureurl.com',
        'test-digitalSignUrl-Modi'
      ]
    },
   
    devIndicators: {
      buildActivity: false
    },
    compiler: {
      removeConsole: false
    },
    env:{
      SERVER: "development",
       API_BASE_URL_SERVER: "https://devapi.easycampus.ai/api",
      // API_BASE_URL_SERVER: "http://89.116.33.93:8080/api",
      // API_BASE_URL_SERVER: "https://Universal Aspire.com/api",
      //  API_BASE_URL_SERVER: 'http://10.5.48.63:8080/api',
      API_BASE_URL_LOCAL:"http://10.5.48.97:8080/api",
    //   GMT_ID:"GTM-57DTG7TN",
  
      encode_decode_secretKey:"BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    },
    swcMinify: false,
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        config.devServer = {
          ...config.devServer,
          https: true
        };
      }
  
      return config;
    }
  };
  
  module.exports = nextConfig;
  