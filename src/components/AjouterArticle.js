import React, { Component } from 'react'
import articles from '../articles'


class AjouterArticle extends Component {
    state = {
        nom: '',
        image: '',
        prix: '',
        informations: ''

    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
      }

    handleSubmit = event => {        
        event.preventDefault()
        const article = { ...this.state }
        this.props.ajouterArticle(article)
        Object.keys(article).forEach(item => {
            articles[item] = ''
          })
          this.setState({ ...article })
    }

    

    render () {
        return (
            <div className='card'>
                <form className='gestion-form ajouter-article' onSubmit={this.handleSubmit}>
                  <input value={this.state.nom} onChange={this.handleChange} name='nom' type='text' placeholder='Nom article' />
                  <input value={this.state.image} onChange={this.handleChange} name='image' type='text' placeholder={'Nom de l\'image'} />
                  <textarea value={this.state.ingredients} onChange={this.handleChange} name='prix' rows='3' placeholder={'prix de l\'article'} />
                  <textarea value={this.state.instructions} onChange={this.handleChange} name='informations' rows='15' placeholder='informations' />
                  <button type='submit' >Ajouter un article</button>
                </form>
            </div>
        )
    }
}

export default AjouterArticle