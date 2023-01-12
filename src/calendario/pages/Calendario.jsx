
import { ViewCanlendario } from './../../view/ViewCanlendario';
import { Navbar } from './../../componentes/Navbar';





export const Calendario = () => {

    const x = 1;

    console.log(x)

    const name = "Angel Soriano"

    
  return (
   <>
    <Navbar nombre={name} btn1="Diario" btn2="Salir" />
    <ViewCanlendario />

   </>
   
  )
}
