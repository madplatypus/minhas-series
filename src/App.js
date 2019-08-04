import React from 'react'
import Header from './Header'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'

const Home = () =>{
  return <h1>Home</h1>
}


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/generos' exact component={Generos}/>
          <Route path='/generos/novo' exact component={NovoGenero}/>
          <Route path='/generos/:id' exact component={EditarGenero}/>
          
        </Switch>
    </div>
    </Router>
  );
}

export default App
