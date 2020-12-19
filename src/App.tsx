import React, { memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import StateProvider from './context/StateProvider/StateProvider';
import BasicLayout from './layouts/BasicLayout/BasicLayout';
import RouteDefinitions from './routes/RouteDefinitions';
import theme from './themes/studioah';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || undefined;

const App = () => (
  <StateProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={baseUrl}>
        <BasicLayout>
          <Switch>
            <Route exact path={RouteDefinitions.Contact.path}>
              <Contact />
            </Route>
            <Route exact path={RouteDefinitions.About.path}>
              <About />
            </Route>
            <Route exact path={RouteDefinitions.Projects.path}>
              <Projects />
            </Route>
          </Switch>
        </BasicLayout>
      </BrowserRouter>
    </ThemeProvider>
  </StateProvider>
);

export default memo(App);
