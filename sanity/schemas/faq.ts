export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string'
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'string'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Set the order of the FAQs. Lower numbers appear first.'
        }
    ],
    // Optional: Add a preview to see the order in the list
    preview: {
        select: {
            title: 'question',
            order: 'order'
        },
        prepare(selection: { title: any; order: any; }) {
            const {title, order} = selection;
            return {
                title: title,
                subtitle: `Order: ${order}`
            }
        }
    }
}
