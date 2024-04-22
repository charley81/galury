/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'source.unsplash.com' }]
  },
  // ignore typescript and eslint build errors during build because we can run these checks separately in a github action so that we don't block our builds.
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
