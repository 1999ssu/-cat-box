import React from 'react';
import { RouteRecordRaw } from 'router';
import MainList from 'views/main/MainList';

export const CatRegisterRouter: RouteRecordRaw[] = [
  {
    path: '/catbox/cat-register',
    name: 'catbox cat register',
    element: React.createElement(MainList),
    meta: {
      title: 'menu.cat-register',
      breadcrumbs: [
        {
          title: 'menu.cat-register',
          routerName: 'cat-register',
        },
      ],
    },
  },
];
