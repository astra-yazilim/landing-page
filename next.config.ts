import type { NextConfig } from "next";
import { defaultLocale } from "./src/config/i18n";
import { localizedSlugs, pageRouteIds, routeSegments } from "./src/config/routes";

const defaultSlugs = localizedSlugs[defaultLocale];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root: __dirname },
  experimental: { optimisticRouting: false },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/", destination: `/${defaultLocale}` },
        ...pageRouteIds.map((routeId) => ({
          source: `/${defaultSlugs[routeId]}`,
          destination: `/${defaultLocale}/${routeSegments[routeId]}`,
        })),
        {
          source: `/${defaultSlugs.services}/:slug`,
          destination: `/${defaultLocale}/${routeSegments.services}/:slug`,
        },
        {
          source: "/:path((?!tr(?:/|$)|en(?:/|$)|api/|_next/).*)",
          destination: `/${defaultLocale}/:path`,
        },
      ],
      fallback: [],
    };
  },
  async redirects() {
    return [
      { source: `/${defaultLocale}`, destination: "/", permanent: true },
      ...pageRouteIds.flatMap((routeId) => {
        const segment = routeSegments[routeId];
        const slug = defaultSlugs[routeId];
        return [
          { source: `/${defaultLocale}/${segment}`, destination: `/${slug}`, permanent: true },
          ...(segment === slug ? [] : [{ source: `/${segment}`, destination: `/${slug}`, permanent: true }]),
        ];
      }),
      {
        source: `/${defaultLocale}/${routeSegments.services}/:slug`,
        destination: `/${defaultSlugs.services}/:slug`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
