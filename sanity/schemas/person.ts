export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'testimony', title: 'Testimony', type: 'text'},
        {name: 'image', title: 'Image', type: 'image'}
    ]
}