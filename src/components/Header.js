import React, { Component } from 'react'

const Header = ({ pseudo }) => {
const formaterPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${ pseudo }` : `de ${ pseudo }`
        return (
            <header>
                <h1>Bienvenue sur le profil  {formaterPseudo(pseudo)} </h1>   
            </header>
        )
    }


export default Header