// ─────────────────────────────────────────────────────────────────────────────
// Journal Formatting Guide
// ─────────────────────────────────────────────────────────────────────────────
// Each entry is keyed by chapter ID.
// Set a chapter to null to show the "coming soon" placeholder.
//
// body[] formatting:
//   - Each string in the array = one paragraph / stanza
//   - For a line break within a stanza, press Enter inside the backtick string:
//       `First line
//        Second line`
//   - For a new paragraph, add a new string to the array
// ─────────────────────────────────────────────────────────────────────────────

export interface JournalSection {
  subheading?: string
  body: string[]
}

export interface JournalEntry {
  title: string
  sections: JournalSection[]
}

export const JOURNALS: Record<number, JournalEntry | null> = {

  1: {
    title: 'Where It Begins',
    sections: [
      {
        subheading: 'Intention',
        body: [
          `It starts with a feeling I can't fully explain…`,

          `Like something is missing—but I don't know what.`,

          `Everything looks the same on the surface.
Same routines. Same world. Same version of me.`,

          `But underneath it all… something shifted.`,

          `When Worlds Apart meets Atoms, it feels like a memory I never lived—
two particles, once connected, now drifting through space.`,

          `Even with distance… even with time…
I still feel her.`,

          `Not always in a way I understand—
sometimes it's a thought,
sometimes it's a feeling I can't shake,
sometimes it's silence that somehow speaks louder than anything else.`,

          `I overthink. I always have.
Trying to make sense of something that was never meant to be controlled.`,

          `But somewhere in that chaos…
I'm learning to let go.`,

          `To trust that not everything needs to be solved—
some things just need to be felt.`,

          `If we're truly connected…
then space doesn't matter.
time doesn't matter.`,

          `Because what's meant to align… will.`,

          `And maybe this distance…
isn't separation at all.`,

          `Maybe it's just the beginning of understanding.`,
        ],
      },
    ],
  },

  2: {
    title: 'The Pull',
    sections: [
      {
        subheading: 'Longing',
        body: [
          `At first, it was just a feeling…
subtle, but impossible to ignore.`,

          `Like something calling to me from a distance I couldn't measure.`,

          `I tried to move forward.
Tried to stay present in what was in front of me.`,

          `But every quiet moment…
brought me right back to it.`,

          `It wasn't just memory.
It wasn't just imagination.`,

          `It felt like something real…
still connecting us beneath the surface.`,

          `Like waves in an ocean—
pulling me closer,
then drifting me away.`,

          `The more I thought about it…
the deeper it pulled me in.`,

          `And the deeper I felt it…
the harder it was to let go.`,

          `I started to question everything.`,

          `Was I holding on to something that was already gone…
or something that was never truly separate?`,

          `Even in silence…
I could feel it.`,

          `A presence I couldn't see…
but somehow never lost.`,

          `It wasn't just about her anymore.`,

          `It was something bigger.
Something I couldn't explain… but couldn't ignore.`,

          `And no matter how far I tried to move forward…`,

          `something in me was still reaching back.`,
        ],
      },
    ],
  },

  3: {
    title: 'The Fire Within',
    sections: [
      {
        subheading: 'Conflict',
        body: [
          `This is where everything shifts.`,

          `The energy rises.
The music gets louder.
And I lose myself in it.`,

          `I started going out more.
Chasing moments.
Chasing experiences.`,

          `The lights, the bass, the crowd—
it all felt like freedom.`,

          `For a while… it worked.`,

          `I could disappear into the sound.
Into the chaos.
Into something bigger than myself.`,

          `Every drop felt like release.
Every show felt like a new beginning.`,

          `Like I was finally living for me.`,

          `But even in the middle of it all…`,

          `something was still missing.`,

          `I'd look around at everyone sharing the moment—`,

          `and I couldn't help but feel it.`,

          `I wished she was there.`,

          `Not to complete the moment…
but to experience it with me.`,

          `To feel what I feel. To hear what I hear.`,

          `To exist in that same frequency.`,

          `And no matter how loud the music got…`,

          `I couldn't silence that thought.`,

          `Maybe this journey was meant to be mine alone.`,

          `Or maybe…`,

          `I was still learning what it means to truly stand on my own.`,
        ],
      },
    ],
  },

  4: {
    title: 'The Escape',
    sections: [
      {
        subheading: 'Release',
        body: [
          `Before I knew how to explain what I was feeling…
I had music.`,

          `Before I knew how to say what hurt…
I had sound.`,

          `This chapter takes me back to where it started.`,

          `The sounds that first made me feel like I could disappear and still be found.`,

          `I didn't always understand why I needed it so much.`,

          `I just knew that when the world felt too heavy…
music gave me somewhere to put it.`,

          `Every drop became an outlet.
Every transition became a way through.`,

          `It wasn't just energy.
It was release.`,

          `A place where pain could turn into movement.
Where confusion could turn into rhythm.`,

          `And somewhere in that escape…
I started becoming a DJ.`,

          `Not just someone playing songs—`,

          `but someone learning how to translate emotion into sound.`,

          `The heavier the bass got…
the lighter I felt.`,

          `Like I could take everything I was carrying
and let the speakers hold it for a while.`,

          `Maybe that's why I kept coming back.`,

          `Because music never asked me to explain myself.`,

          `It just met me where I was.`,

          `And for a moment…
that was enough.`,
        ],
      },
    ],
  },

  5: {
    title: 'The Unspoken',
    sections: [
      {
        subheading: 'Truth',
        body: [
          `There's so much I've wanted to say…
but never did.`,

          `Not because I didn't feel it—
but because I didn't know if I should.`,

          `I've held back.
Respected the distance.
Respected the silence between us.`,

          `But that doesn't mean I stopped thinking about you.`,

          `There are moments I wish I could call you…
tell you everything that's happened.`,

          `The growth.
The music.
The person I've been becoming without you.`,

          `Not to change anything—
but just to share it with you.`,

          `Because a part of me still feels like
you're meant to hear it.`,

          `I don't know where you are now.
Or who you've become.`,

          `But I want you to know—`,

          `if you ever reach out…
I'll be there.`,

          `No hesitation.
No resentment.`,

          `Just presence.`,

          `Time has a way of healing things we don't understand.`,

          `And maybe one day…`,

          `when the timing is right…`,

          `we'll find our way back to each other.`,

          `Not as who we were—
but as who we've become.`,
        ],
      },
    ],
  },

  6: {
    title: 'The Dreamscape',
    sections: [
      {
        subheading: 'Realization',
        body: [
          `There was a time when everything felt… weightless.`,

          `Before the noise.
Before the questions.
Before I tried to understand it all.`,

          `I remember the first sounds that pulled me in—
Trance. Progressive House.
Ethereal… like stepping into something beyond this world.`,

          `It wasn't just music.
It felt like a place.`,

          `A place I had been searching for
without even knowing it.`,

          `TomorrowWorld.
My first festival.
My first glimpse into something bigger than myself.`,

          `Lights stretching into the sky.
Energy that felt infinite.
Moments that didn't feel bound by time.`,

          `For the first time…
I wasn't escaping.`,

          `I was arriving.`,

          `And even now…
that feeling stays with me.`,

          `A reminder that there's more to this journey
than what I can see in front of me.`,

          `I've always dreamed of going to Tomorrowland.`,

          `Not just for the music…
but for what it represents.`,

          `A place where everything aligns.
Where reality feels… elevated.`,

          `And a part of me still holds onto that vision—`,

          `that one day…
I won't be there alone.`,

          `Not out of need…
but out of alignment.`,

          `Because some dreams aren't meant to be chased—`,

          `they're meant to be realized…
when the time is right.`,
        ],
      },
    ],
  },

  7: {
    title: 'The Butterfly Effect',
    sections: [
      {
        subheading: 'Transcendence',
        body: [
          `I think about how small moments become everything.`,

          `How one choice.
One pause.
One thing left unsaid…
can shape an entire reality.`,

          `This chapter lives inside that question—`,

          `if one thing had been different…
would our story be different too?`,

          `I go back to that our first shows.`,

          `The night I met you.
The night I met your friends.
The night something quiet began forming
before I even knew what it was.`,

          `I felt something there…
but I didn't know what to do with it.`,

          `I held back.`,

          `Not because there was nothing there—
but because my life was still tangled in another story.`,

          `And sometimes I wonder…`,

          `What if I had been honest sooner?`,

          `What if I had made it known?`,

          `What if one small decision
created a different timeline for us?`,

          `But maybe the butterfly effect isn't just about regret.`,

          `Maybe it's about understanding
that every version of the story still led me here.`,

          `To the music.
To the memories.
To the parts of you that still live inside the sound.`,

          `ODESZA reminds me of the worlds we shared—
the movies, the live sets,
the moments where music felt like its own language between us.`,

          `INZO reminds me of the spiritual side of it all—
the feeling that this connection was never just ordinary.`,

          `And All I Got…`,

          `that song holds something I don't know how to explain.`,

          `A memory.
A prayer.
A feeling I still carry.`,

          `Maybe this is where the journey ends.
Or maybe this is where it finally becomes clear.`,

          `That even if the past can't be changed…
it can still teach me how to love differently.`,

          `How to move with more honesty.
More courage.
More presence.`,

          `And if the universe ever gives us another chance…`,

          `I hope I recognize the moment
before it becomes another timeline I look back on.`,

          `Until then…`,

          `I trust the ripple.`,

          `I trust the timing.`,

          `I trust that every small thing
has been guiding us somewhere.`,
        ],
      },
    ],
  },

}
