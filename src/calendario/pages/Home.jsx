

//import {  Navigate, Route, Router, Routes } from "react-router-dom"
import { Navbar } from './../../componentes/Navbar';






export const Home = () => {
  
  const nombre = "Calendario";
  let login = `Login`;
  let registrar = `Registrar`;

  return (
    <Navbar nombre={nombre} btn1={login} btn2={registrar} />
  )
}
