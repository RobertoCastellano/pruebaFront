import React,{Fragment} from 'react';
import Pokes from "../components/Pokes";
import {Provider} from "react-redux";
import generateStore from "../redux/store";
import Navbar from '../components/Navbar';


function ListPokes() {

const store = generateStore();

	return (
		<Fragment>
			<Provider store={store}>
				<div className="App container mt-5">
				<Navbar titulo="Listado de Pokemones" return="Volver" path="/"/>
				<hr/>
					<Pokes/>
				</div>
			</Provider>
		</Fragment>
	);
}

export default ListPokes;