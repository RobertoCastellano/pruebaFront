import React,{useState,useEffect,Fragment} from 'react'
import MovieCard from './MovieCard'


const Grid = () => {

	
	// Creamos un estado con un array vacío
	const [pelicula,setPelicula]= useState([])

	/* Utilizamos useEffect para llamar al método
	que conecta con la API
	*/
	useEffect(() => {
		listMovie()
	}, [])

	const listMovie = async () => {
		const data = await fetch('https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=movie')
		const movies = await data.json()
		setPelicula(movies.results)
	}
	/*Recorremos un array con el método .map y que
	vaya iterando el array de la API para mostrar el cartel
	de cada película llamando a un componente con sus props
	*/
	return (
		<Fragment>
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2 g-4 ms-4 me-4 mt-3">
						{		
							pelicula.map((item)=>{			
								return<div key={item.id}><MovieCard
								title={item.title}
								poster_path='https://larazon.co/wp-content/uploads/2021/08/CARLOS-8-1-1132x670.png'//{item.poster_path}
								release_date={`Fecha de estreno: `
								+item.release_date}		
								/>
								</div>
							})	
						}
				</div>
			</div>
		</Fragment>
	)
}

export default Grid
