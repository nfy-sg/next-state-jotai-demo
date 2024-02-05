/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   swcPlugins: [['@swc-jotai/react-refresh', {}]],
  // },
  reactStrictMode: true,
  trailingSlash: true,

  // Learn more here - https://nextjs.org/docs/advanced-features/compiler#module-transpilation
  // Required for UI css to be transpiled correctly 👇
  transpilePackages: ['jotai-devtools'],
};

export default nextConfig;
