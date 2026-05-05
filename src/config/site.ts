// ─────────────────────────────────────────────────────────────────────────────
// AETHER — Site Configuration
// Edit these values to customize content across the site without touching
// individual component files.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  music: {
    // Displayed as the section heading in the Music section
    sectionTitle: 'Entanglement: A Spiritual Journey Through Sound',

    // YouTube playlist ID — the part after "list=" in the URL
    // e.g. https://www.youtube.com/playlist?list=PLHco92bSKXS5eCnFdyT2sEWlm4nNdGE81
    youtubePlaylistId: 'PLHco92bSKXS5eCnFdyT2sEWlm4nNdGE81',

    // YouTube video ID — the part after "v=" in the watch URL.
    // Leave empty to show a clean YouTube callout instead of a broken embed.
    youtubeVideoId: '',

    // Full Spotify playlist share URL — paste it here when ready
    // Leave as empty string to hide the Spotify link
    spotifyUrl: '',
  },

  social: {
    youtube: 'https://youtube.com/@aether-dj_7',
    youtubePlaylist:
      'https://www.youtube.com/playlist?list=PLHco92bSKXS5eCnFdyT2sEWlm4nNdGE81',
    github: 'https://github.com/Alpha-Tango-12',
    soundcloud: 'https://soundcloud.com/aether-dj-704',
  },
} as const
