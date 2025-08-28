import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BetAki",
    short_name: "BetAki",
    description: "BetAki - Cassino, Roleta, caça-níqueis, cartas e muito mais!",
    start_url: "/",
    background_color: "#000000",
    theme_color: "#00a63e",
    display_override: ["fullscreen", "minimal-ui"],
    display: 'standalone',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
