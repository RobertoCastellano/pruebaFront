import {Fragment, useState, useEffect} from 'react';
import API from '../../../config/API';
import {useNavigate,useParams} from 'react-router-dom';

const AddCategory = ()=>{

	const {id} = useParams();
	const redirect= useNavigate();

	const [state, setState]= useState({
		loaded: false,
		data:[]
	})

	useEffect(()=>{

		API.post('categories/add'+id).then((datos) => {

			setState({
				...state,
				data: datos.data,
				loaded: true
			});
		});
	})

	const createCategory = ()=>{

		const obj = {
			title: document.getElementById('title').value,
		}

		API.post('categories/add',obj).then((datos) => {

			redirect('/app/categories');
			
			console.log("LA CATEGORÍA CREADA ES : "+id, datos);
		});	
	}
	
	return (
		<Fragment>
			<div className="row row-cols-2 justify-content-md-center mt-3">
				<h3 className="mb-5">Añadir categoría</h3>
				<input type="text" id="title" placeholder="Añadir categoría"/>
				<button type="button" onClick={createCategory}>Añadir categoría</button>
			</div>
		</Fragment>
	);
}

export default AddCategory;