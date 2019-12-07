import React from 'react'

const GestionForm = ({
  id: key,
  majArticle,
  articles,
  supprimerArticle
}) => {
    
  const article = articles[key]

  const handleChange = (event, key) => {
    const { name, value } = event.target
    const article = articles[key]
    article[name] = value
    majArticle(key, article)
  }

  return (
    <div className='card' >
      <form className='gestion-form'>

        <input value={article.nom} onChange={e => handleChange(e, key)} type='text' name='nom' placeholder='Nom article' />

        <input value={article.image} onChange={e => handleChange(e, key)} type='text' name='image' placeholder="nom de l'image" />

        <textarea value={article.prix} onChange={e => handleChange(e, key)} name='prix' rows='3' placeholder='prix article' />

        <textarea value={article.informations} onChange={e => handleChange(e, key)} name='informations' rows='15' placeholder='Liste des informations' />

      </form>
      <button onClick={() => supprimerArticle(key)}>Supprimer</button>
    </div>
  )
}

export default GestionForm
