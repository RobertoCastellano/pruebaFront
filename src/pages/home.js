import { Fragment, useState, useEffect } from "react";
import AcordeonItem from "../components/website/acordeon-item";
import ArticleCard from "../components/website/article-card";
import Footer from "../components/website/footer";
import Menu from '../components/website/menu';
import API from '../config/API';

const Home = (props) => {

	// STATES
		// state = objeto, setState = funcion
		const [state, setState] = useState({
			loaded: false,
			posts: []
		});

	// useEFFECTS
		useEffect(()=>{
			API.get('post/list', {limit:6}).then((datos) => {
				if(datos.status==true){
					setState({
						loaded: true,
						posts: datos.data
					});
				}
			});
		},[]);

	//console.log(state);

	return(
		<Fragment>
			<Menu/>		
			<br/>

			<div className="container-md">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus odio nihil qui at, rem quam delectus optio sed voluptatem ducimus labore! Mollitia, quisquam! Dolorem eligendi corrupti modi, hic sequi molestiae.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus, modi itaque ex voluptates totam hic, debitis quisquam aut asperiores cumque nostrum! Nulla sequi placeat vitae, autem praesentium totam reiciendis!
				</p>
			</div>

			<div className="container">
				<div className="row g-3 mt-3">
					{
						(state.loaded==false? "cargando..." :
							<Fragment>
								{
									state.posts.map((articulo)=>{
										return <ArticleCard
											title={articulo.title}
											photo="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"/>
									})
								}
							</Fragment>
						)
					}
				</div>
			</div><br/>

			<div className="container accordion" id="accordionExample">
				<AcordeonItem question="Pregunta 1" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Pregunta 2" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Pregunta 3" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Pregunta 4" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Pregunta 5" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Pregunta 6" answer={<p><strong>Hola is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
			</div><br/>	
		<Footer/>				
		</Fragment>

	);

}

export default Home;