
// Emulating todo records which should be returned from API backend
// in the real world.
export default async function data() {
  return [
    {
      public_id: 'bak kut teh',
      name: 'Bak Kut Teh',
      description: 'A typical and comforting breakfast – herbal and soupy – that comes with tea. Especially suited for a weekends.',
      checked: false,
      tags: ['food']
    },
    {
      public_id: 'henderson waves',
      name: 'Henderson Waves',
      description: "Let's take a walk in the evening with stunning views on top of a forest.",
      checked: false,
      tags: ['hiking']
    },
    {
      public_id: 'manhattan',
      name: 'Manhattan',
      description: 'Surprise surprise on October 20th, 8pm.',
      checked: false,
      tags: ['secret']
    },
    {
      public_id: 'mbs',
      name: 'MBS',
      description: "Walking, exploring, and a flair of luxury.",
      checked: false,
      tags: ['explore']
    },
    {
      public_id: 'art science',
      name: 'Art Science Museum',
      description: 'Orchestral Manoeuvres: See Sound. Feel Sound. Be Sound.',
      checked: false,
      tags: ['explore', 'museum']
    },
    {
      public_id: 'gajah gallery',
      name: 'Gajah Art Gallery',
      description: '5th Passage: In Search of Lost Time.',
      checked: false,
      tags: ['museum', 'explore']
    },
  ]
}
