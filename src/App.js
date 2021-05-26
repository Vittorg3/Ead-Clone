import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContextHook';
import ReactTooltip from 'react-tooltip';

import { 
  PageBody, 
} from './AppStyled';

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
import InscricaoPage from './pages/Inscricao';
import PerfilPage from './pages/Perfil';
import NaoEncontradoPage from './pages/Pagina_404';

import PainelPage from './pages/pages_admin/Painel';
import AdicionarCursoPage from './pages/pages_admin/AdicionarCurso';
import AdicionarModuloPage from './pages/pages_admin/AdicionarModulo';
import AdicionarAulaPage from './pages/pages_admin/AdicionarAula';
import AdicionarMaterialPage from './pages/pages_admin/AdicionarMaterial';

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

const RouteAdmin = ({children, ...rest}) => (
  auth.isAdmin() === true && (
    <Route {...rest}>
      {children}
    </Route>
  ) || (
    window.location.href="/"
  )
);

const Logout = () => {
  auth.logout();
  return <Redirect path="/login" />
};

export default () => {
  return (
    <UserContextProvider>
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
              <RoutePrivate exact path="/curso/:nameCurso/:nameAula">
                  <CursoPage />
              </RoutePrivate>
              <RoutePrivate axact path="/perfil">
                <PerfilPage />               
              </RoutePrivate>
              <RoutePrivate exact path="/logout">
                <Logout />
              </RoutePrivate>
              <Route path="/inscricao">
                <InscricaoPage />
              </Route>
              
              <RouteAdmin exact path="/painel">
                <PainelPage />
              </RouteAdmin>
              <RouteAdmin exact path="/adicionar/curso">
                <AdicionarCursoPage />
              </RouteAdmin>
              <RouteAdmin exact path="/adicionar/modulo">
                <AdicionarModuloPage />
              </RouteAdmin>
              <RouteAdmin exact path="/adicionar/aula">
                <AdicionarAulaPage />
              </RouteAdmin>
              <RouteAdmin exact path="/adicionar/material/aula">
                <AdicionarMaterialPage />
              </RouteAdmin>
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
    </UserContextProvider>
  );
}