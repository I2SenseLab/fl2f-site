export default {
    name: 'peopleList',
    title: 'People List',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'futured',
            title: 'Home Page Futured',
            type: 'array',
            of: [{type: 'reference', to: {type: 'person'}}]
        },
        {
            name: 'testimonials',
            title: 'Testimonials',
            type: 'array',
            of: [{type: 'reference', to: {type: 'person'}}]
        },
        {
            name: 'recommendations',
            title: 'Recommendations',
            type: 'array',
            of: [{type: 'reference', to: {type: 'person'}}]
        }
    ],
}