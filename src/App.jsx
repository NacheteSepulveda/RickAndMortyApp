import react from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router";

//PAGINAS
import SearchCharacterPage from './pages/SearchCharacterPage';

//EN ESTE COMPONENTE SE APLICAN LAS RUTAS!!!

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* HOME */}
      <Route path='/Home' element={<Home />}/>
      {/* RUTA DEL SEARCH */}
      <Route path='/search' element={<SearchCharacterPage />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
