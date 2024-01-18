import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'fl2f-astro',

  projectId: 'ztbaubpf',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {

    productionUrl: async (prev, context) => {
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2021-03-25'})

      if (document._type === 'post') {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          {postId: document._id}
        )

        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `https://fl2f.ca/post/${slug}?${params.toString()}`
      }

      return prev
      
    }
  }
})
