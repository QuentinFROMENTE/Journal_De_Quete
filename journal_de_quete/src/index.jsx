import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/css/style.css';
import Home from './pages/home';
import CreatePage from './pages/createPage';
import LoadingPage from './pages/loadingPage';
import GamesRouter from './router/gamesrouter';
import ListTypeQuest from './pages/listTypeQuest';
import About from './pages/about';
import DevLog from './pages/devlog';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/devlog" element={<DevLog/>}/>
      <Route path="/NewSave" element={<CreatePage/>} />
      <Route path="/LoadSave" element={<LoadingPage/>} />
      <Route path="/:profilName" element={<GamesRouter/>}/>
      <Route path="/:profilName/:game" element={<ListTypeQuest/>}/>
    </Routes>
  </Router>
);