import API from '../../../config/API';
import {Fragment, useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const DeleteCategories = () => {

	const [state, setState]= useState({
		status:"loading",
		data:{}
	})

	const {id} = useParams();
	const redirect = useNavigate();

	useEffect(()=>{

		API.get('categories/select/'+id)
		.then((datos)=>{

			console.log("DATOS", datos);

			setState({
				...state,
				data:datos.data,
				status:"loaded"
			});
		});
	},[])

	const categoryDelete=()=>{
		API.delete('categories/delete/'+id)
		.then(()=>{
			redirect('/app/categories');
		});
	};

	if(state.status==="loading"){return(<div>Cargando...</div>)}

	if(state.status==="loaded"){

	return ( 
		<Fragment>
		<div className=" text-center mt-3">
			<h3 className="mb-5">Eliminar categoría</h3>
			<div>¿Desea a eliminar <strong>{state.data.title}</strong>?</div>
			<button type="button" onClick={categoryDelete} className="btn-danger mt-5">Eliminar categoría</button>
		</div>
		</Fragment>
	 );
	}
}
 
export default DeleteCategories;