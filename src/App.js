import React from 'react';

import { 
  PageBody, 
} from './AppStyled';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/Home';
import AnotacoesPage from './pages/Anotacoes';
import TrilhasPage from './pages/Trilhas';
import CursoPage from './pages/Curso';

export default () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Menu />
        <PageBody>
          <Header />
          <Switch>
            <Route path="/home">
                <HomePage />            
            </Route>
            <Route path="/anotacoes">
                <AnotacoesPage />
            </Route>
            <Route path="/trilhas">
                <TrilhasPage />
            </Route>
            <Route path="/forum">
                Forum
            </Route>
            <Route path="/curso/:nameCurso">
                <CursoPage />
            </Route>
          </Switch>
          <Footer />
        </PageBody>
      </div>
    </BrowserRouter> 
  );
}