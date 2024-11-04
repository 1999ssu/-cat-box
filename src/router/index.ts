import React from 'react';
import MainList from 'views/main/MainList';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { CatRegisterRouter } from 'router/catRegister';
interface RouteMeta {
  title: string;
  breadcrumbs?: {
    title: string;
    routerName: string;
  }[];
}

export interface RouteRecordRaw {
  path: string;
  name: string;
  element: React.ReactElement;
  meta?: RouteMeta;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/catbox',
    name: 'catbox',
    element: React.createElement(MainList),
  },
  ...CatRegisterRouter,
];

const AppRouter = () => {
  return React.createElement(
    HashRouter,
    null,
    React.createElement(
      Routes,
      null,
      routes.map((route, index) =>
        React.createElement(Route, { key: index, path: route.path, element: route.element })
      )
    )
  );
};

export default AppRouter;
