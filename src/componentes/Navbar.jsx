import { Link } from "react-router-dom"
import { Link as RLink } from "react-router-dom"


const nombreBtn = {
    btn1: 'Login',
    btn2: 'Registrar'
}




export const Navbar = ( 
    {
        nombre,
        btn1,
        btn2,
    }
 ) => {

    const name = 'Sorido0'
    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
            <span className="navbar-brand">
                <i className="far fa-calendar-check"></i>
                &nbsp;
                {nombre}
            </span>



            <div className="form-group mb-2 p-2">

                <Link compenent={RLink} to="login" >
                    <button type="button" className="btn btn-outline-primary mx-2">

                        {btn1}
                    </button>

                </Link>

                <Link compenent={RLink} to="/registrar" >

                    <button type="button" className="btn btn-outline-primary">

                        {btn2}
                    </button>

                </Link>



            </div>


        </div>
    )
}
