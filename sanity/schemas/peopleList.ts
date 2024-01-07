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
    validation: (Rule: { custom: (arg0: (fields: any) => true | "You cannot have duplicate people in the featured list." | "You cannot have duplicate people in the testimonials list." | "You cannot have duplicate people in the recommendations list.") => any; }) => Rule.custom((fields: { futured: any; testimonials: any; recommendations: any; }) => {
        // Function to check for duplicates
        const checkDuplicates = (array: any[]) => {
            const unique = new Set(array?.map((item: { _ref: any; }) => item._ref));
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