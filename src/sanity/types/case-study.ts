import { DocumentMagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: DocumentMagnifyingGlassIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'period',
      type: 'object',
      fields: [
        {
          name: 'startDate',
          type: 'string',
          title: 'Start Date',
          description: 'E.g., 2021',
        },
        {
          name: 'endDate',
          type: 'string',
          title: 'End Date',
          description: 'E.g., 2023',
        },
        {
          name: 'isActive',
          type: 'boolean',
          initialValue: false,
          title: 'Is it still active?',
        },
      ],
    }),
    defineField({
      name: 'services',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: { type: 'service' } })],
    }),
    defineField({
      name: 'testimonial',
      type: 'reference',
      to: { type: 'testimonial' },
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO Settings',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
