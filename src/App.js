import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignInAndSignUp from './component/sign-in-and-sign-up/sign-in-and-sign-up.component'

//firebase
import { auth } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsusbcribedFromAuth = null


  //pour que l'on reste connecter après un f5 ou si on ferme et ouvre l'appli
  componentDidMount () {
    this.unsusbcribedFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user)
    })
  }

  //pour ce déconnecter quand l'appli est completement ferme et eviter une brèche de sécurité
  componentWillUnmount () {
    this.unsusbcribedFromAuth();
  }
  
  
  
  render() {
    const { currentUser } = this.state 
    return (
      <div>
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
  
        </Switch>
      </div>
    );
  }
  
}

export default App;
