import { defineField, defineType } from 'sanity'

export const storySection = defineType({
  name: 'storySection',
  title: 'Story Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'body1', title: 'Body Paragraph 1', type: 'text', rows: 4 }),
    defineField({ name: 'body2', title: 'Body Paragraph 2', type: 'text', rows: 4 }),
    defineField({ name: 'image1', title: 'Main Image (tall)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'image2', title: 'Image 2', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'image3', title: 'Image 3', type: 'image', options: { hotspot: true } }),
  ],
})
