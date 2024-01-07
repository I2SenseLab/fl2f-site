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
    validation: Rule => Rule.custom(fields => {
        // Function to check for duplicates
        const checkDuplicates = (array) => {
            const unique = new Set(array?.map(item => item._ref));
            return unique.size === array?.length;
        };

        // Check each field for duplicates
        if (!checkDuplicates(fields.futured)) {
            return 'You cannot have duplicate people in the featured list.';
        }
        if (!checkDuplicates(fields.testimonials)) {
            return 'You cannot have duplicate people in the testimonials list.';
        }
        if (!checkDuplicates(fields.recommendations)) {
            return 'You cannot have duplicate people in the recommendations list.';
        }

        return true;
    })
}