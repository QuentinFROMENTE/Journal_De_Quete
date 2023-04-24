import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/css/style.css';
import Acceuil from './pages/acceuil';
import Creation from './pages/creation';
import Chargement from './pages/chargement';
import GamesRouter from './router/gamesrouter';
import ListeTypeQuete from './pages/listeTypeQuete';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Acceuil/>} />
      <Route path="/NewSave" element={<Creation/>} />
      <Route path="/LoadSave" element={<Chargement/>} />
      <Route path="/:profilName" element={<GamesRouter/>}/>
      <Route path="/:profilName/:game" element={<ListeTypeQuete/>}/>
    </Routes>
  </Router>
);