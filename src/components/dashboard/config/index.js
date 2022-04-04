import {Fragment, useState, useEffect} from "react";

const Config = ()=>{

	return (
		<Fragment>
			<div className="row row-cols-2 justify-content-md-center mt-3">
			<h3 className="mb-5">Configuración</h3>
			<input type="text" id="title" placeholder="Clave"/>
			<textarea type="text" id="content" placeholder="Contenido"/>
			<button type="button">Configurar</button>
			</div>
		</Fragment>
	)
};

export default Config;