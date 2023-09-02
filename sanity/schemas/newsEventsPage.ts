export default {
  name: 'newsEventsPage',
  title: 'News & Events Page',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'certificateEvents',
      title: 'Certificate Events',
      type: 'array',
      of: [{type: 'reference', to: {type: 'certificateEvent'}}],
    },
    {
      name: 'alumniEvents',
      title: 'Alumni Events',
      type: 'array',
      of: [{type: 'reference', to: {type: 'alumniEvent'}}],
    },

    {
      name: 'newsEvents',
      title: 'News Events',
      type: 'array',
      of: [{type: 'reference', to: {type: 'newsEvent'}}],
    },
  ],
}
