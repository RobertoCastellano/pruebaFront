import {Fragment, useState, useEffect} from 'react';
import API from '../../../config/API';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteLeads = () => {

	const [state, setState]= useState({
		status: "loading",
		data:{}
	})

	const {id} = useParams();
	const redirect = useNavigate();

	useEffect(()=>{

		API.get('leads/select/'+id).then((datos)=>{

			console.log("DATOS", datos);

			setState({
				...state,
				data: datos.data,
				status: "loaded"
			});
		});

	},[])

	const leadsDelete=()=>{

		API.delete('leads/delete/'+id)
		.then(()=>{
			redirect('/app/leads');
		});
	};

	if(state.status==="loading"){return(<div>Cargando...</div>)}

	if(state.status==="loaded"){
		return ( 
			<Fragment>
				<div className=" text-center mt-3">
					<h3 className="mb-5">Eliminar lead</h3>
					<div>¿Desea a eliminar a <strong>{state.data.name}</strong>?</div>
					<button type="button" onClick={leadsDelete} className="btn-danger mt-5">Eliminar lead</button>
				</div>
			</Fragment>
		);
	}

}
 
export default DeleteLeads;