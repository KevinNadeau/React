import React from 'react'

const Login = ({ authenticate }) => {
    return (
        <div className='Login'>
            <h2>Veuillez vous connecter afin de créer vos articles</h2>
            <button className='facebook-button' onClick={authenticate}>
                Se connecter avec facebook
            </button>

        </div>
    )
}

export default Login