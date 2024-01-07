export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'FAQ Title',
            type: 'string',
        },
        {
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{ 
                type: 'object',
                title: 'FAQ',
                fields: [
                    {
                        name: 'question',
                        title: 'Question',
                        type: 'string'
                    },
                    {
                        name: 'answer',
                        title: 'Answer',
                        type: 'text'
                    },
                ],
            }],
        }
    ],
}
