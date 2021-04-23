import React from 'react';

import { 
  PageBody, 
} from './AppStyled';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import AnotacoesPage from './pages/Anotacoes';
import TrilhasPage from './pages/Trilhas';
import CursoPage from './pages/Curso';
import LoginPage from './pages/login';

import auth from './helpers/Authentication';

const RoutePrivate = ({children, ...rest}) => (
    auth.isLogged() === true && (
      <Route {...rest}>
        {children}
      </Route>
  ) || (
      window.location.href="/login"
  )
);

const Logout = () => {
  auth.logout();
  return <Redirect path="/login" />
}

export default () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Menu />
        <PageBody>
          <Header />
          <Switch>
            <RoutePrivate exact path="/">
                <HomePage />            
            </RoutePrivate>
            <RoutePrivate exact path="/anotacoes">
                <AnotacoesPage />
            </RoutePrivate>
            <RoutePrivate exact path="/trilhas">
                <TrilhasPage />
            </RoutePrivate>
            <RoutePrivate exact path="/forum">
                Forum
            </RoutePrivate>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <RoutePrivate exact path="/curso/:nameCurso">
                <CursoPage />
            </RoutePrivate>
            <RoutePrivate exact path="/logout">
              <Logout />
            </RoutePrivate>
          </Switch>
          {auth.isLogged() && 
            <Footer />
          }
        </PageBody>
      </div>
    </BrowserRouter> 
  );
}