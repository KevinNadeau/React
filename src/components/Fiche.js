import React from 'react'

const Fiche = ({ details }) => {

    const imageDefault = chemin => {
        try{
            return require( `../img/${chemin}`)
        }catch (err){
            return require( `../img/default.jpg`)
        }
    }

    return (
        <div className="card">
            <div className="image">
                <img src={imageDefault(details.image)} alt={ details.nom } />
            </div>
            <div className="article">
                <h2>{ details.nom }</h2>
                <ul className="liste-prix">
                    <h2>Prix: { details.prix }</h2> 
                </ul>
                <ol className="liste-informations">
                    { details.informations }
                </ol>
            </div>
        </div>
    )
}

export default Fiche

