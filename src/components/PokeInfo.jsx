import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pokeInfoAction} from '../redux/apiDucks';


const PokeInfo = () => {

	const dispatch = useDispatch();

	useEffect(() => {

		const fetchData=()=>{
			dispatch(pokeInfoAction())
		}
		fetchData();
	}, [dispatch])

	const pokemon = useSelector((store)=> store.items.unPokemon)
	console.log(pokemon)

	return pokemon ?(
		<div className="card mt-4 text-center">
			<div className="card body">
				<h3>Información Pokemon</h3>
				<img src={pokemon.imagen} className="img-thumbnail" alt="Imagen del Pokemon"/>
				<div className="card title text-uppercase">{pokemon.nombre}</div>
				<p className="card text">Alto: {pokemon.alto} | Ancho: {pokemon.ancho}</p>
			</div>
		</div>
	): null
}

export default PokeInfo
