import React, { Component } from 'react'
import AjouterArticle from './AjouterArticle'
import GestionForm from './GestionForm'
import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../base'


class Gestion extends Component {
    state = {
        uid: null,
        admin: null

    }    

    componentDidMount () {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
            this.handleAuth({ user })
            }
        })
    }

    handleAuth = async authData => {
        const connect = await base.fetch(this.props.pseudo, { context: this })

        //On verifie si l'utiliseur existe déja
        if(!connect.admin){
            await base.post(`${this.props.pseudo}/amdin`, {
                data: authData.user.uid
            })
        }
        this.setState({
            uid: authData.user.uid, 
            admin: connect.admin || authData.user.uid
        })
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then(this.handleAuth)
    }

    deconnection = async () => {
        console.log('Deconnection')
        await firebase.auth().signOut()
        this.setState({ uid: null })
    }

    render () {
        const {articles, ajouterArticle, majArticle, chargerArticle, supprimerArticle} = this.props

        const deconnection = <button onClick={this.deconnection}>Se déconnecter</button>        

        if (!this.state.uid){
            return <Login authenticate={this.authenticate} />
        }

        if (this.state.uid !== this.state.admin) {
            return (
                <div>
                    <p>Vous n'etes pas admin de cette page</p>
                    {deconnection}
                </div>
            )
        }

        

        return (
            <div className="cards">
              <AjouterArticle ajouterArticle={ajouterArticle} /> 
              {
                  Object.keys(articles)
                  .map(key => <GestionForm
                  key={key}
                  id={key}
                  majArticle={majArticle}
                  supprimerArticle={supprimerArticle}
                  articles={articles} />)
              } 
            <footer>
                {deconnection}
                <button                
                onClick={chargerArticle}>
                    Ajouter un article
                </button>
            </footer>    
            </div>
            
        )
    }
}

export default Gestion