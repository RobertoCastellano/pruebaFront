import {Fragment, useState, useEffect} from "react";
import API from '../../../config/API';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';


const Pages = ()=>{

	const [state, setState] = useState({
		loaded: false,
		pages: []
	});

	useEffect(()=>{
		// Hacemos petición a users/list
		API.get('pages/list').then((datos) => {
			console.log(datos);
			if(datos.status===true){

				setState({
					loaded: true,
					pages: datos.data
				});
			}
		});
	},[])

	const columns = [

		{
			name: 'ID',
			selector: row => row.ID,
			sortable: true,
		},
		{
			name: 'Título',
			selector: row => row.title,
			sortable: true,
		},
		{
			name: 'Contenido',
			selector: row => row.content,
			sortable: true,
		},
		{
			name: 'Opciones',
			selector: row => <Link to={"/app/pages/edit/"+row.ID}  className="fa-solid fa-pen-to-square btn btn-primary"></Link>,
			sortable: false
		},
		{
			name: 'Eliminar',
			selector: row => <Link to={"/app/pages/delete/"+row.ID}  className="fa-solid fa-trash-can btn btn-primary"></Link>,
			sortable: false
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
			data={state.pages}
			customStyles={customStyles}
			pagination
			paginationComponentOptions={pageOpt}
			/>
		</Fragment>

	)
};

export default Pages;