import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleClick = () => {
        // Navegar a una ruta específica
        // history.push('/');
        
        // Reemplazar ruta actual por otra
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Ingresar
            </button>
        </div>
    )
}
