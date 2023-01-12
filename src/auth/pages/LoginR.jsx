
import './login.css'
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';



export const LoginR = () => {

    const protoUser = {
        email: 'sorido01@sorido0.com',
        password: 'Ass533158'
    }

    const [user, setuser] = useState({
        email: '',
        password: ''
    })

    const { email, password } = user;

    const onChangLogin = ({ target}) => {
        
        setuser({
            ...user,
            [target.name]: target.value
        })
    }


    const handleLogin = (e) => {
        e.preventDefault();
        console.log({user, protoUser});

        useNavigate("/calen")

    }

    return (
        <div className="container login-container">
            <div className="row">

                <div className="col login-form-1">
                    <h3>Ingreso</h3>
                    <form className='form-sorido0' onSubmit={ handleLogin }>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='email'
                                value={ email}
                                onChange={onChangLogin}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='password'
                                value={ password }
                                onChange={onChangLogin}
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
