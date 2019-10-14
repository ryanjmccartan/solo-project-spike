import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    recipe: []
  }

componentDidMount() {
  this.getRecipe();
}

getRecipe = () => {
  axios({
    method: 'GET',
    url: '/recipe'
  }).then(response => {
    console.log('GET recipe', response.data);
    this.setState({
      recipe: response.data.results
    })
    console.log('this is state', this.state.recipe);
  }).catch(error => {
    console.log('error with get', error);
  })
}

  render() {
    return (
      <div className="App">
        {JSON.stringify(this.state.recipe)};
       <ul>{this.state.recipe.map(recipe => {
         return <li key={recipe.id}>{recipe.title}
                    <br/>
                    <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x150.jpg`} alt="recipe"/>
                  </li>

       })} 
       </ul>
      </div>
    );
  }
}

export default App;
