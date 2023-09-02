export default {
  name: 'certificateEvent',
  title: 'Certificate Events',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'certificateImage',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
