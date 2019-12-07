import React, { Component } from 'react'
// CSS
import './App.css'
//Composants
import Header from './components/Header'
import Gestion from './components/Gestion'
import Fiche from './components/Fiche'
//infos bdd
import articles from './articles'


//Firebase
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    articles: {}
  }
  componentDidMount () {

    this.ref = base.syncState(`/${this.state.pseudo}/articles`,{
     context: this,
     state: 'articles'  
    })    
  }

  componentWillUnmount (){
    //on termine la connexion à firebase
    base.removeBinding(this.ref)
  }

  supprimerArticle = key  => {
    const article =  { ...this.state.articles }
    articles[key] = null
    this.setState({ articles })
  }

  ajouterArticle = article => { 
    const articles = { ...this.state.articles }
    articles[`article-${Date.now()}`]  = article
    this.setState({ articles })
  }

  majArticle = (key, newArticle) => { 
    const articles = { ...this.state.articles }
    articles[key]  = newArticle
    this.setState({ articles })
  }

  chargerArticle = () => this.setState({ ...articles })
  
  render () {
    const fiches = Object.keys(this.state.articles)
      .map(key => <Fiche key={key} details={this.state.articles[key]}/>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo} />
        <div className='fiches'>
          { fiches }
        </div>
        <Gestion
        pseudo={this.state.pseudo}
        articles={ this.state.articles }
        ajouterArticle={this.ajouterArticle}
        supprimerArticle={this.supprimerArticle}
        majArticle={this.majArticle}
        chargerArticle={this.chargerArticle} />

      </div>
    )
  }
}

export default App
