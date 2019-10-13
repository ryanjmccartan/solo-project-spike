import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import axios from 'axios';

class App extends Component {

componentDidMount() {
  this.getRecipe();
}

getRecipe = () => {
  axios.get('/recipe').then(response => {
    console.log('GET recipe', response.data);
    this.props.dispatch({type: 'SET_RECIPE', payload: response.data});
    console.log('this is redux state', this.props.reduxState.recipe);
  }).catch(error => {
    console.log('error with get', error);
  })
}

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

const putReduxOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxOnProps)(App);
