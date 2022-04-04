import {Fragment, useState, useEffect} from 'react';
import API from '../../../config/API';
import {useParams} from 'react-router-dom';

const EditCategory = () => {

	const {id}= useParams();

	const [state, setState]= useState({
		loaded: false,
		data: []
	});

	useEffect(()=>{

		API.get('categories/edit/'+id).then((datos)=>{
			setState({
				...state,
				data: datos.data,
				loaded: true
			});
		});	

	},[])

	const CategoriesEdit =()=>{

		const obj ={
			title: document.getElementById('title').value,
		}

		console.log("obj", obj);

		API.put('categories/edit/'+id,obj)
		.then((datos) => {	
			if(datos.status===true){
				setState({
					loaded: true,
					categories: datos.data
				});
			}	
			console.log("datos ", datos)
		});
	}

	console.log("LA CATEGORÍA A EDITAR ES: ",+id )

	return (
		<Fragment>
			<div className="row row-cols-2 justify-content-md-center mt-3">
				<h3 className="mb-5">Editar categoría</h3>
				<input type="text" id="title" placeholder="Editar categoría" defaultValue={state.data.title}/>
				<button type="button" onClick={CategoriesEdit}>Editar categoría</button>
			</div>
		</Fragment>
	  );
}
 
export default EditCategory;