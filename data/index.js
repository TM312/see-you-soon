
// Emulating todo records which should be returned from API backend
// in the real world.
export default async function data() {
  return [
    {
      public_id: 'bak kut teh',
      name: 'Bak Kut Teh',
      description: 'A typical and comforting breakfast – herbal and soupy – that comes with tea. Especially suited for a weekends.',
      checked: false,
    },
  ]
}
