import { generatePath, useNavigate } from 'react-router-dom';
import { reject } from 'rambda';
import { Chat, Login } from 'pages';
import { ComponentType } from 'react';
import { FindUser } from 'pages/find-user/FindUser';

export interface RouteConfig {
  id: string;
  label: string;
  path: string;
  Component: ComponentType;
  authenticated: boolean;
}

export enum RouteName {
  Login = 'Login',
  Chat = 'Chat',
  FindUser = 'FindUser'
}

export enum PathName {
  login = '/login',
  chat = '/chat',
  find = '/find'
}

const routes: Record<RouteName, RouteConfig> = {
  [RouteName.Login]: {
    id: 'login',
    label: 'login',
    path: PathName.login,
    Component: Login,
    authenticated: true
  },
  [RouteName.Chat]: {
    id: 'chat',
    label: 'chat',
    path: PathName.chat,
    Component: Chat,
    authenticated: true
  },
  [RouteName.FindUser]: {
    id: 'find',
    label: 'find',
    path: PathName.find,
    Component: FindUser,
    authenticated: true
  }
};

export const authenticatedRoutes: RouteConfig[] = Object.values(routes).filter(
  (route) => route.authenticated
);

export const unauthenticatedRoutes: RouteConfig[] = Object.values(routes).filter(
  (route) => !route.authenticated
);

export function useGotoRoute<T>(name: RouteName): (params?: T) => void {
  const navigate = useNavigate();
  const route = routes[name];
  return function gotoRoute() {
    const path = generatePath(route.path);
    navigate(path);
  };
}

export const protectedRoutes = reject(({ Component }) => !Component, [...authenticatedRoutes]);

export function generateRoutePath({ name }: { name: RouteName }): string {
  const route = routes[name];
  return generatePath(route.path);
}
