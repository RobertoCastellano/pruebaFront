import axios from 'axios';

// CONSTANTES

const dataInicial={
	count : 0,
	next : null,
	previous : null,
	results : []
}

// TYPES

const GET_ITEMS = 'GET ITEMS'
const NEXT_ITEMS = 'NEXT ITEMS'
const INFO_ITEMS = 'INFO ITEMS'


// REDUCER 

export default function apiReducer(state = dataInicial, action){
	switch (action.type) {
		case GET_ITEMS:
			return {...state, ...action.payload}
		case NEXT_ITEMS:
			return {...state, ...action.payload}
		case INFO_ITEMS:
			return {...state, unPokemon: action.payload}
		default:
			return state;
	}
}

// ACCIONES

export const pokeInfoAction = (url='https://pokeapi.co/api/v2/pokemon/1/')=> async(dispatch)=> {

	if (localStorage.getItem(url)){
		dispatch({
			type: INFO_ITEMS,
			payload: JSON.parse(localStorage.getItem(url))
		})
		console.log('Desde localStorage')
		return
	}

	try {
		const res= await axios.get(url)
		console.log('Desde API')
		console.log(res.data)
		dispatch({
			type: INFO_ITEMS,
			payload: {
				nombre: res.data.name,
				ancho: res.data.weight,
				alto: res.data.height,
				imagen: res.data.sprites.front_default
			}
		})
		localStorage.setItem(url, JSON.stringify({
			nombre: res.data.name,
			ancho: res.data.weight,
			alto: res.data.height,
			imagen: res.data.sprites.front_default
		}))
		
	} catch (error) {
		console.log(error)	
	}
}




export const getItemsAction = ()=> async (dispatch)=> {

	if (localStorage.getItem('offset=0')) {
		console.log('Datos locales')
		dispatch({
			type: GET_ITEMS,
			payload: JSON.parse(localStorage.getItem('offset=0'))
		})
		return
	}

	try {
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
		console.log('Datos API')
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		})
		localStorage.setItem('offset=0', JSON.stringify(res.data))	
	} catch (error) {
		console.log(error)		
	}
}

export const nextItemAction = ()=> async (dispatch, getState)=> {

	const {next} = getState().items

	if (localStorage.getItem(next)) {
		console.log('Datos locales')
		dispatch({
			type: GET_ITEMS,
			payload: JSON.parse(localStorage.getItem(next))
		})
		return
	}

	try {
		const res = await axios.get(next)
		console.log('Datos API')
		dispatch({
			type: NEXT_ITEMS,
			payload: res.data
		})
		localStorage.setItem(next, JSON.stringify(res.data))		
	} catch (error) {
		console.log(error)
		
	}
}

export const previousItemAction = ()=> async (dispatch, getState)=>{

	const {previous} = getState().items

	if (localStorage.getItem(previous)) {
		console.log('Datos locales')
		dispatch({
			type: GET_ITEMS,
			payload: JSON.parse(localStorage.getItem(previous))
		})
		return
	}

	try {
		const res = await axios.get(previous)
		console.log('Datos API')
		dispatch({
			type: NEXT_ITEMS,
			payload: res.data
		})
		localStorage.setItem(previous, JSON.stringify(res.data))				
	} catch (error) {
		console.log(error)
		
	}

}