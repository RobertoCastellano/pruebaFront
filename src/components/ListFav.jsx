import React, {Fragment, useState, useEffect} from 'react'
import Navbar from './Navbar';
import {useParams} from 'react-router-dom';


const ListFav = () => {

	const {id}= useParams();

	const[favorito, setFavorito]= useState([])

	useEffect(() => {
		const addFav = async () => {
			const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=movie/${id}`)
			const movies = await data.json()
			setFavorito(movies.results)		
		}
		addFav()
	},[id])

	/*Llamamos al componente Navbar con sus props correspondientes,
	en el h3 llamamos al estado y al título correspondiente
	*/
	return (
		<Fragment>
			<div className="App container mt-5">
				<Navbar titulo="Películas favoritas" return="Volver" path="/"/>
			</div>
			<h3>{favorito.title}</h3>	
		</Fragment>
			
	)
}

export default ListFav
