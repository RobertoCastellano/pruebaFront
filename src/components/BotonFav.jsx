import React, {useState,useEffect} from 'react'
import { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom';

/* Creamos un botón que recoja como parámetro el id 
y lo lleve a su ruta correspondiente de manera dinámica
*/
const BotonFav = () => {

	// Utilizamos el hook useParams para recuperar el id
	const {id} = useParams();

	// Creamos un estado con un array vacío
	const[favorito, setFavorito]= useState([])

	/* Utilizamos useEffect para llamar al método
	que conecta con la API
	*/
	useEffect(() => {
		clickFav();
	},[])

	const clickFav = async () => {

		const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=movie/${id}`)
		const movies = await data.json()
		setFavorito(movies.results)		
	}
	/*Recorremos un array con el método .map y que
	vaya iterando el array de la API para mostrar los títulos de
	cada película 
	*/
	return (
		<Fragment>
			{
				favorito.map((item) =>{	
					return<div key={item.title} className="p-3 border bg-light text-center shadow p-3 mb-5 bg-body rounded">
								<Link to={`/favoritos/${item.title}`}>
									<button className="btn btn-block" type="button" id="btn">
										<i className="fa-solid fa-star"></i><br/>
										Favoritos
									</button>
								</Link>
							</div>											
				})
			}
		</Fragment>
	)
}

export default BotonFav


