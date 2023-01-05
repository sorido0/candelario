import { Navigate, Route, Router, Routes } from "react-router-dom"




import { Home, Calendario } from './../calendario/index';
import { LoginR, Registar } from './../auth/index';







export const AppRouter = () => {

    const authState = "No-login"
    return (
        // Aqui se define las rutas de la aplicacion
        <Routes>
            {
            
                authState === "No-login" ? <Route path="/*" element={<Home />} /> : <Route path="/*" element={<Calendario />} />


           
            }
            <Route path="/home" element={<Home />} />
            <Route path='/*' element={ <Navigate to='home' /> } />

            
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<LoginR />} />
            <Route path="/registrar" element={<Registar />} />

            <Route path="/calen" element={<Calendario />} /> 
        </Routes>

    )
}
