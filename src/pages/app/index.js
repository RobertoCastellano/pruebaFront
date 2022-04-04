import {Fragment, useEffect} from "react";
import Panel from "../../components/dashboard/panel";
//import Manage from "../../components/dashboard/manage";
import { useNavigate } from 'react-router-dom';
import API from '../../config/API';

import './style.css';

const Dashboard = (props)=>{

	const nav = useNavigate();

	// FORMA 3 (forma 1 If ; forma 2 ternario)
		var content = props.content || <div><h2>Hola al panel de control</h2></div>;

		useEffect(()=>{
			const token = API.get_token();

			// Si no tiene token, lo mandamos al login
				if(token === null){ nav('/login'); }

			// Si tiene un token NO válido, lo mandamos al login
				API.get('users/info').then((datos)=>{ if(datos.status===false){nav('/login');} });

		},[]);

	return(
		<Fragment>
			<Panel contenido={ content } />	
		</Fragment>
	);

}

export default Dashboard;