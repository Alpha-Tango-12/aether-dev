// ─────────────────────────────────────────────────────────────────────────────
// Da Vinci Code — Passcodes & Journals
// ─────────────────────────────────────────────────────────────────────────────
// Each entry maps a passcode (case-insensitive) to a journal with media.
//
// To add a new passcode:
//   1. Add an entry to the DAVINCI_CODES array below
//   2. Upload media:  aws s3 cp photo.jpg s3://aether-media-assets/davinci/photo.jpg
//   3. Reference with: S3_BASE + 'davinci/photo.jpg'
//
// Media types:
//   - 'image' → renders as <img>
//   - 'video' → renders as <video> (mp4, webm)
// ─────────────────────────────────────────────────────────────────────────────

export interface DaVinciMedia {
  type: 'image' | 'video'
  src: string
  caption?: string
}

export interface DaVinciJournal {
  title: string
  subheading: string
  body: string[]
  media: DaVinciMedia[]
}

export interface DaVinciEntry {
  passcode: string
  journal: DaVinciJournal
}

const S3_BASE = 'https://aether-media-assets.s3.us-east-2.amazonaws.com/'

export const DAVINCI_CODES: DaVinciEntry[] = [

  {
    passcode: 'entanglement',
    journal: {
      title: 'The Hidden Layer',
      subheading: 'What Lives Beneath the Surface',
      body: [
        `There's always more than what meets the eye.`,

        `When I first read The Da Vinci Code, it changed how I saw the world.
Not because of the plot — but because of the idea that meaning could be hidden in plain sight.`,

        `Symbols within symbols.
Messages woven into architecture.
Truths disguised as art.`,

        `It made me realize that the most powerful stories aren't always told directly —
they're embedded. Layered. Waiting to be discovered by someone paying close enough attention.`,

        `That idea never left me.`,

        `When I built this site, I wanted it to be more than a portfolio.
More than a collection of tracks and timestamps.`,

        `I wanted it to feel alive — like there was something deeper underneath the surface.
Something only the curious would find.`,

        `So I buried pieces of myself in the code.
In the numbers. In the transitions. In the silence between sections.`,

        `Not everything here is meant to be obvious.
Some things are meant to be earned.`,

        `If you're reading this… you found one.`,

        `The Da Vinci Code taught me that the creator's fingerprint
lives in the details no one was meant to see.`,

        `This site is my cathedral.
The music is the stained glass.
And the hidden messages… are the prayers.`,
      ],
      media: [
        { type: 'image', src: S3_BASE + 'davinci/aly_1.jpg', caption: 'Where it all began' },
      ],
    },
  },

  // ── Add more passcodes below ──────────────────────────────────────────────
  // {
  //   passcode: 'butterfly',
  //   journal: {
  //     title: 'The Butterfly Effect',
  //     subheading: 'Small Moments, Infinite Ripples',
  //     body: [
  //       `Your journal text here...`,
  //     ],
  //     media: [
  //       { type: 'image', src: S3_BASE + 'davinci/butterfly.jpg', caption: 'The moment' },
  //     ],
  //   },
  // },

]
