import { defineField, defineType } from 'sanity'

export const menuPdf = defineType({
  name: 'menuPdf',
  title: 'Menu PDF',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', initialValue: 'Current Menu PDF' }),
    defineField({ name: 'file', title: 'PDF File', type: 'file',
      options: { accept: '.pdf' },
      validation: r => r.required() }),
  ],
})
