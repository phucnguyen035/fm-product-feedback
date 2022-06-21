import { BlitzConfig } from 'blitz';

const blitzConfig: BlitzConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  // TODO: Enable again once headlessui has updated
  reactStrictMode: false,
  // TODO: Enable again when fixed https://github.com/vercel/next.js/issues/36498
  optimizeFonts: false,

  webpack(config: any) {
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};

export default blitzConfig;
