import React from 'react';
import HomePage from './components/HomePage';
import SingleMovie from './components/SingleMovie';
import Favourite from './components/Favourite';
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar';

class App extends React.Component {

  render() {
    //console.log('this.props in render function',this.props);
    return (
      <div>   
          <NavBar history= {this.props.history}/>
           <Route path="/"  component={HomePage} exact />
          <Route path="/movie" component={SingleMovie} />
          <Route path ="/favourite" component = {Favourite} />
          
      </div>
    )
  }
}





export default App;
