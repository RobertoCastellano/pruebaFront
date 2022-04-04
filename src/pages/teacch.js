import {Fragment} from "react";
import Menu from "../components/website/menu";
import Footer from "../components/website/footer";
import AcordeonItem from "../components/website/acordeon-item";
import Picture from "../components/website/picture";

const Teacch = ()=>{
	return(
		<Fragment>
			<Menu/>
			<Picture photo="http://3.bp.blogspot.com/-F1gqnr7LoOg/VA6bDG7JNCI/AAAAAAAABn8/jCG8MIBnBHQ/s1600/welcome.PNG"/>
			<div className="container accordion mt-5 mb-5" id="accordionExample">
				<AcordeonItem question="Información 1" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Información 2" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Información 3" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Información 4" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Información 5" answer={<p><strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
				<AcordeonItem question="Información 6" answer={<p><strong>Hola is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.</p>} />
			</div>
			<Footer/>
		</Fragment>
	);
}

export default Teacch;