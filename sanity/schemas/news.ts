export default {
  name: 'newsEvent',
  title: 'News Events',
  type: 'document',
  fields: [
    {name: 'date', title: 'Date', type: 'date'},
    {name: 'title', title: 'News Title', type: 'string'},
    {name: 'description', title: 'News Description', type: 'string'},
    {name: 'link', title: 'News Link', type: 'url'},
  ],
}
