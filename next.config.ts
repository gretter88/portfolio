import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const csp = [
      "default-src 'self'",
	  "script-src 'self' 'unsafe-inline' https://www.youtube-nocookie.com https://www.youtube.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https: https://i.ytimg.com https://*.ytimg.com",
      "font-src 'self' data: https:",
      "connect-src 'self' https: https://*.googlevideo.com https://www.youtube.com https://www.youtube-nocookie.com",
      "frame-src https://www.youtube-nocookie.com https://www.youtube.com",
      "media-src 'self' https: https://*.googlevideo.com",
      "base-uri 'self'",
      "form-action 'self' mailto:",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },


  async redirects() {
    return [{ source: "/", destination: "/es", permanent: false }];
  },
};

export default nextConfig;
