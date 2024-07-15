import {defineField, defineType} from 'sanity'

export const memberType = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({
      name: 'nickname',
      title: 'Nickname',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{type: 'team'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'score',
      title: 'Score',
      type: 'number',
      validation: (Rule) => Rule.min(6).max(29),
    }),
  ],
})
