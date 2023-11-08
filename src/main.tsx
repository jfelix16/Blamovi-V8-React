import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components
import Header from './components/Header'
import Footer from './components/Footer'

import CadastroUsuario from './pages/Cadastro de Usuário'
import Contato from './pages/Contato'
import Login from './pages/Login/'
import RecuperacaoSenha from './pages/recuperacaoSenha/'


//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/*Indica que aplicação terá rotas*/}
      <Header  />
      <Routes>{/*Indica uma lista de rotas*/}
               
        
        <Route path='cadastro/usuario' element={<CadastroUsuario />} />
        <Route path='login' element={<Login />} />   
        <Route path='recuperacaosenha' element={<RecuperacaoSenha />} />
        <Route path='Contato' element={<Contato/>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)