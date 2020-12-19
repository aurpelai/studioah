import { RouteType } from './RouteDefinitions.types';

const About: RouteType = {
  path: '/about',
  titleKey: 'Navigation.about',
};

const Contact: RouteType = {
  path: '/contact',
  titleKey: 'Navigation.contact',
};

const Projects: RouteType = {
  path: '/',
  titleKey: 'Navigation.projects',
};

const RouteDefinitions = {
  About,
  Contact,
  Projects,
};

export default RouteDefinitions;
