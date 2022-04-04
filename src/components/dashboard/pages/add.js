import {Fragment, useState, useEffect} from 'react';
import API from '../../../config/API';
import { useNavigate,useParams } from 'react-router-dom';

const AddPages = () => {

	const {id} = useParams();
	const redirect = useNavigate();

	const [state, setState]= useState({
		loaded: false,
		data: []
	})

	useEffect(()=>{

		API.post('pages/add'+id).then((datos)=>{

			setState({
				...state,
				data: datos.data,
				loaded: true
			});
		})
	})

	const createPage = ()=>{

		const obj = {
			ID_user: document.getElementById('ID_user').value,
			title: document.getElementById('title').value,
			content: document.getElementById('content').value
		}

		API.post('pages/add',obj).then((datos)=>{

			redirect('/app/pages');

			console.log("LA PÁGINA CREADA ES : "+id, datos);
		})

	}

	return (
		<Fragment>
			<div className="row row-cols-2 justify-content-md-center mt-3">
				<h3 className="mb-5">Añadir página</h3>
				<input type="number" id="ID_user" placeholder="ID usuario"/>
				<input type="text" id="title" placeholder="Título"/>
				<textarea type="text" id="content" placeholder="Contenido"/>
				<button type="button" onClick={createPage}>Añadir página</button>
			</div>
		</Fragment>

	 );
}
 
export default AddPages;