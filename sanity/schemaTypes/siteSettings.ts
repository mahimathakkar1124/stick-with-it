import { defineField, defineType } from 'sanity'

export const siteSettings = {
  ...defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      defineField({ name: 'zomatoUrl', title: 'Zomato URL', type: 'url', validation: r => r.required() }),
      defineField({ name: 'instagramHandle', title: 'Instagram Handle', type: 'string' }),
      defineField({ name: 'instagramUrl', title: 'Instagram URL', type: 'url' }),
      defineField({ name: 'address', title: 'Address', type: 'text', rows: 3 }),
      defineField({ name: 'mapsUrl', title: 'Google Maps URL', type: 'url' }),
      defineField({ name: 'openingHours', title: 'Opening Hours', type: 'string' }),
      defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
      defineField({ name: 'tickerText', title: 'Ticker Text (comma separated)', type: 'string',
        description: 'e.g. WAFFLES · PANCAKES · SPIRALS · FRIES' }),
    ],
  }),
  // Singleton — only one document of this type
  __experimental_actions: ['update', 'publish'] as const,
}
