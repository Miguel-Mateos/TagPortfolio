import {v4 as uuid} from 'uuid'
export const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec commodo mauris. Aliquam erat volutpat. Aliquam suscipit in augue et iaculis. Sed non amet."

export const contentMock = [
  {
    id: uuid(),
    title: 'Tag Ds',
    chip: 'non disclosure agreement',
    subtitle: 'The Adecco Group Design System',
    description: lorem,
    image: 'https://picsum.photos/500',
    contender: 'TAG Design System for The Adecco Group'
  },
  {
    id: uuid(),
    title: 'Case Study 1',
    chip: 'non disclosure agreement',
    subtitle: 'Subtitle 1',
    description: lorem,
    image: 'https://picsum.photos/500',
    contender: 'Contender 1'
  },
  {
    id: uuid(),
    title: 'Case Study 2',
    chip: 'non disclosure agreement',
    subtitle: 'Subtitle 2',
    description: lorem,
    image: 'https://picsum.photos/500',
    contender: 'Contender 2'
  }
]