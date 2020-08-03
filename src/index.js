import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import CadastroVideo from './Pages/Cadastro/Video/Index';
import CadastroCategoria from './Pages/Cadastro/Categoria';



ReactDOM.render(
   
   <BrowserRouter>
     <Switch>
     < Route path= "/cadastro/video" component={CadastroVideo} />
     < Route path= "/cadastro/categoria" component={CadastroCategoria} />
     < Route path= "/" component={Home} exact />
     < Route component={() => (<div> Página 404</div>)} />

    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
