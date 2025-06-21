import { users } from '@fastadm/mocks/records/users.ts';
import { userFormView } from '@fastadm/mocks/views/user_form.ts';
import { userListView } from '@fastadm/mocks/views/user_list.ts';

const apps = [
  {
    name: 'auth',
    label: 'Authentication and Authorization',
    models: [
      { name: 'group', label: 'Groups', url: '/api/groups' },
      {
        name: 'user',
        label: 'Users',
        url: '/api/users',
        default_view: 'user_list',
      },
    ],
  },
  {
    name: 'catalog',
    label: 'Catalog',
    models: [
      { name: 'author', label: 'Authors', url: '/api/authors' },
      {
        name: 'book_instance',
        label: 'Book instances',
        url: '/api/books_instances',
      },
      {
        name: 'book',
        label: 'Books',
        url: '/api/books',
        default_view: 'book_list',
      },
      { name: 'genre', label: 'Genres', url: '/api/genres' },
    ],
  },
];

const views = {
  user: [userFormView, userListView],
};

export const fakedData = {
  apps,
  users,
  views,
};

export const getById = (model: string, id: string) => {
  // @ts-ignore
  return fakedData[model].find((x: { id: number }) => x.id === Number(id));
};
