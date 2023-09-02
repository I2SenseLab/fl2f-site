export default {
  name: 'alumniEvent',
  title: 'Alumni Events',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'alumniImage',
      title: 'Alumni Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'date', title: 'Date', type: 'date'},
  ],
}
