import {Fragment} from "react";
import Menu from "../components/website/menu";
import Form from "../components/website/form";
import Footer from "../components/website/footer";
import Picture from "../components/website/picture";

function Contact () {
	
	//console.log(state);

	return(
		<Fragment>
			<Menu/>
				<div className="container-md mb-4">
			<Picture photo="https://3.bp.blogspot.com/-PCC9RqCAQIk/WgluJv597eI/AAAAAAAAB48/F2yboLWXw7Ad20Bdc16inK-FMlT0Z0y9QCPcBGAYYCw/s400/Contactos.png"/>
			<Form/>
				</div>
			<Footer/>
		</Fragment>
	)
}

export default Contact;

