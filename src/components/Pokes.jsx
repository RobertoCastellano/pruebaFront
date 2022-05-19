import React from 'react';
import {Button, Grid} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsAction, nextItemAction, pokeInfoAction, previousItemAction } from '../redux/apiDucks';
import PokeInfo from './PokeInfo';
import Navbar from './Navbar';

const Pokes = () => {

	const dispatch = useDispatch();

	const pokemons = useSelector((store)=>store.items.results);

	const next = useSelector((store)=>store.items.next)
	const previous = useSelector((store)=>store.items.previous)

	console.log(pokemons)


	return (
		<div className="row">
			<div className="col-md-6">
				<div className="d-flex justify-content-between mt-4">
					{
						pokemons.length === 0 && <Button onClick={()=>dispatch(getItemsAction())} variant="contained" fullWidth>Mostrar Pokemon</Button>
					}
					{
						next && 
						<Button onClick={()=>dispatch(nextItemAction())} variant="contained">Siguiente</Button>
					}
					{
						previous && 
						<Button onClick={()=>dispatch(previousItemAction())} variant="contained">Anterior</Button>
					}
				</div>

				<ul className="list-group mt-3">
					{
						pokemons.map(item=>(	
							<li key={item.name} className="list-group-item text-uppercase">
								{item.name}
								<Grid item xs align="right">
									<Button onClick={()=>dispatch(pokeInfoAction(item.url))}
									variant="contained">Info</Button>
								</Grid>
							</li>			  
						))
					}
				</ul> 
			</div>
			<div className="col-md-6">
				<PokeInfo/>
			</div>
		
		</div>
	)
}

export default Pokes
