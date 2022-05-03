import React, { Fragment, useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

/*Creamos el componente MovieCard el cual mostrará las siguientes props,
poster_path, title y release_date, también añadimos un botón que redirije a
la página de favoritos.
*/

const MovieCard = (props) => {

	const[favorito, setFavorito]= useState([])

	useEffect(() => {
		clickFav();
	},[])

	const clickFav = async () => {
		const data = await fetch('https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=movie')
		const movies = await data.json()
		setFavorito(movies.results)		
	}

	return (
		<Fragment>
			<div className="col-12">
				<div className="p-3 border bg-light text-center shadow p-3 mb-5 bg-body rounded">
					<img src={props.poster_path} className="mb-3 rounded card-img-top" alt="..." />
						{props.title}<br/><br/>
						{props.release_date}<br/><br/>
						<Link to='/favoritos'>
							<button className="btn btn-block" type="button">
								<i className="fa-solid fa-star"></i> Favoritos
							</button>
						</Link>				
				</div>
			</div>
		</Fragment>
	);

}
export default MovieCard
