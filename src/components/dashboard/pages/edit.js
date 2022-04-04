import {Fragment, useState, useEffect} from 'react';
import API from '../../../config/API';
import {useParams} from 'react-router-dom';

const EditPages = () => {

	const {id}= useParams();

	const [state, setState]= useState({
		loaded: false,
		data: []
	});

	useEffect(()=>{

		API.put('page/edit/'+id).then((datos)=>{

			setState({
				...state,
				data: datos.data,
				loaded: true
			});
		});
	},[])

	const pageEdit= ()=>{

		const obj = {
			title: document.getElementById('title').value,
			content: document.getElementById('content').value
		}

		API.put('pages/edit/'+id,obj)
		.then((datos) => {	
			if(datos.status===true){
				setState({
					loaded: true,
					page: datos.data
				});
			}	
			console.log("datos ", datos)
		});
	}

	console.log("LA PÁGINA A EDITAR ES: ",+id )

	return (
		<Fragment>
			<div className="row row-cols-2 justify-content-md-center mt-3">
				<h3 className="mb-5">Editar página</h3>
				<input type="text" id ="title" placeholder="Título"/>
				<textarea type="text" id="content" placeholder="Contenido"/>
				<button type="button" onClick={pageEdit}>Editar página</button>
			</div>
		</Fragment>
	  );
}
 
export default EditPages;