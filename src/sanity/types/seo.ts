import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      validation: (Rule) =>
        Rule.max(60).warning('Meta titles should be under 60 characters.'),
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      title: 'Meta Description',
      validation: (Rule) =>
        Rule.max(160).warning(
          'Meta descriptions should be under 160 characters.',
        ),
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      options: { hotspot: true },
    }),
  ],
})
