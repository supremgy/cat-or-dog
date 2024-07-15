import {defineField, defineType} from 'sanity'

export const adminType = defineType({
  name: 'admin',
  title: 'Admin',
  type: 'document',
  fields: [
    defineField({
      name: 'nickname',
      title: 'Nickname',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{type: 'team'}],
    }),
  ],
})
