
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
      description: 'Surprise surprise on Wednesday, October 20th, 8pm.',
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
    {
      public_id: 'mexican_mojitos',
      name: 'Mexican Mojitos',
      description: 'We are going to explore Mexican food & drink culture on Friday, October 15th, 6pm',
      checked: false,
      tags: ['food']
    },
    {
      public_id: 'yishun',
      name: 'Yishun – Welcome to the hood',
      description: 'Yishun, the most dangerous place in Singapore, and a family dinner.',
      checked: false,
      tags: ['food', 'explore']
    },
    {
      public_id: 'east_coast',
      name: 'East Coast',
      description: 'A fantastic bike tour along the coast and as far as you can.',
      checked: false,
      tags: ['bike tour', 'explore']
    },
    {
      public_id: 'the_projector',
      name: 'The Projector',
      description: 'Cinema indie culture.',
      checked: false,
      tags: ['movies']
    },
    {
      public_id: 'fort_canning',
      name: 'Fort Canning',
      description: 'Peaceful hiking and fantastic views – also: Next to where we work.',
      checked: false,
      tags: ['hiking', 'explore']
    },
    {
      public_id: 'bay_jogging',
      name: 'Bay Jogging',
      description: 'Get the best view on Singapore, at night, while jogging, bring your shoes.',
      checked: false,
      tags: ['jogging', 'explore']
    },
    {
      public_id: 'zhai',
      name: 'Meeting the Zhais',
      description: "Let's go and visit the young family.",
      checked: false,
      tags: ['people']
    },
    {
      public_id: 'pottery_shop',
      name: 'Fine pottery art',
      description: 'A gem of fine arts.',
      checked: false,
      tags: ['explore']
    },
  ]
}
