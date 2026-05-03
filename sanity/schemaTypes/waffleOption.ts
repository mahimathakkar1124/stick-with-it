import { defineField, defineType } from 'sanity'

export const waffleOption = defineType({
  name: 'waffleOption',
  title: 'Waffle Builder Option',
  type: 'document',
  fields: [
    defineField({ name: 'step', title: 'Step', type: 'string',
      options: { list: ['shape', 'base', 'sauce', 'topping', 'extra'] },
      validation: r => r.required() }),
    defineField({ name: 'name', title: 'Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'price', title: 'Extra Price (₹)', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
