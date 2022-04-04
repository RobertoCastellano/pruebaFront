import {Fragment, useState, useEffect} from "react";
import Menu from "../components/website/menu";
import Footer from "../components/website/footer";
import Picture from "../components/website/picture";
import API from "../config/API";

const About = ()=>{

	// STATES
		// state = objeto, setState = funcion
		const [state, setState] = useState({
			loaded: false,
			pages: []
		});

	// useEFFECTS
		useEffect(()=>{
			API.get('pages/select/16').then((datos) => {
				if(datos.status==true){
					setState({
						loaded: true,
						pages: datos.data
					});
				}
			});
		},[]);

	return (
		<Fragment>
			<Menu/>
			<Picture photo="https://diseñatusueño.com/wp-content/uploads/2055/07/about-us-600x200.png.webp"/>
			<div className="container-md mt-4">
			{
				(state.loaded===false? "cargando..." :
				<Fragment>
					<h1>{state.pages.title}</h1>
					<div dangerouslySetInnerHTML={{__html: state.pages.content}} />
				</Fragment>
				)
			}
			</div>
			<Footer/>
		</Fragment>
	);
}

export default About;