import React from 'react';

import { 
  PageBody, 
} from './AppStyled';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import AnotacoesPage from './pages/Anotacoes';
import TrilhasPage from './pages/Trilhas';
import CursoPage from './pages/Curso';
import LoginPage from './pages/login';
import SuportePage from './pages/Suporte';
import NaoEncontradoPage from './pages/Pagina_404';

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
            <RoutePrivate exact path="/suporte">
                <SuportePage />
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
            <Route path="/*">
              <NaoEncontradoPage />
            </Route>
          </Switch>
          {auth.isLogged() && 
            <Footer />
          }
          <ReactTooltip id="tip-right" place="right" effect="solid" className="tooltipCustom" />
        </PageBody>
      </div>
    </BrowserRouter> 
  );
}