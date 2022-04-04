import {Fragment, useEffect} from "react";
import Panel from "../components/dashboard/panel";
import Header from "../components/website/header";
import Manage from "../components/dashboard/manage";

const Dashboard = ()=>{

	useEffect(()=>{
		const token = API.get_token();

		// Si no tiene token, terminamos
			if(token === null){ return; }

		// Si tiene un token VÁLIDO, lo mandamos a la APP
			API.get('users/info').then((datos)=>{ if(datos.status){nav('/app');} });

	},[]);

	return(
		<Fragment>
			<div className='p-5 ms-5 mt-5 card-header'>
				<Manage/>
			</div>
			<Panel/>
			<Header/>
		</Fragment>
	);
}

export default Dashboard;