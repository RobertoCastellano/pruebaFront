import {Fragment,useState, useEffect} from "react";
import API from '../../../config/API';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';

const Leads = ()=>{

	const [state, setState] = useState({
		loaded: false,
		leads: []
	});

	useEffect(()=>{
		// Hacemos petición a users/list
		API.get('leads/list').then((datos) => {
			console.log(datos);
			if(datos.status===true){

				setState({
					loaded: true,
					leads: datos.data
				});
			}
		});
	},[])

	const columns = [

		{
			name: 'Nombre',
			selector: row => row.name,
			sortable: true,
		},
		{
			name: 'Apellidos',
			selector: row => row.surname,
			sortable: true,
		},
		{
			name: 'Teléfono',
			selector: row => row.phone,
			sortable: true,
		},
		{
			name: 'Email',
			selector: row => row.email_lead,
			sortable: true,
		},
		{
			name: 'Texto',
			selector: row => row.text,
			sortable: true,
		},
		{
			name: 'Info',
			selector: row => row.info,
			sortable: true,
		},
		{
			name: 'Opciones',
			selector: (row)=>{
				return <Link to={"/app/leads/delete/"+row.ID} className="fa-solid fa-trash-can btn btn-primary"></Link>
			},
			sortable: true,
		}
	];

	const customStyles ={
		rows: {
			style: {
				minHeight: '72px',
				fontSize: '14px',
				fontFamily: 'Verdana',
			},
		},
		headCells: {
			style: {
				paddingLeft: '8px',
				paddingRight: '8px',
				background:'#56baed',
				fontSize: '15px',
				fontWeight: 'bold',
				color: '#fff',
				fontFamily: 'Verdana',
			},
		},
		cells: {
			style: {
				paddingLeft: '8px',
				paddingRight: '8px',
				background:'#dce7ee',
			},
		},
	}

	const pageOpt = {
		rowsPerPageText: 'Filas por página',
		rangeSeparatorText: 'de',
		selectAllRowsItem: true,
		selectAllRowsItemText: 'Todos'
	}

	return(
		<Fragment>
		<DataTable
		columns={columns}
		data={state.leads}
		customStyles={customStyles}
		pagination
		paginationComponentOptions={pageOpt}
		/>
		</Fragment>
	)
};

export default Leads;