
import './login.css'


export const LoginR = () => {
    return (
        <div className="container login-container">
            <div className="row">

                <div className="col login-form-1">
                    <h3>Ingreso</h3>
                    <form className='form-sorido0'>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

              
            </div>
        </div>
    )
}
