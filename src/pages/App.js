import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'

function App() {

  return (
	  <Fragment>
		<div className="App container mt-5">
			<Navbar titulo="Cartelera de películas" return="Favoritos" path="/favoritos"/>
			<Grid/>
		</div>
	  </Fragment>
  );
}

export default App;
