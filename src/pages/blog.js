import {Fragment} from "react";
import Menu from "../components/website/menu";
import Footer from "../components/website/footer";
import Grid from "../components/website/grid";
import Picture from "../components/website/picture";


const Blog = ()=>{
	return(
		<Fragment>
			<Menu/>
			<Picture photo="https://cmacomunicacion.com/wp-content/uploads/2017/06/blog1.jpg"/>
			<div className="row row-cols-1 row-cols-md-3 g-4 ms-4 me-4 mt-3">
				<Grid title="Artículo 1" photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
				<Grid title="Artículo 2" photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
				<Grid title="Artículo 3" photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
				<Grid title="Artículo 4" photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
				<Grid title="Artículo 5" photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
				<Grid title="Artículo 6" photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
			</div>
			<Footer/>
		</Fragment>
	);
}
export default Blog;