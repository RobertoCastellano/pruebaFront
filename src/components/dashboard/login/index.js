import {Fragment, useState} from 'react';
import Input from '../../dashboard/input/index.js';
import API from '../../../config/API';
import { useNavigate } from 'react-router-dom'

const Login = () => {

	const [state, setState] = useState({
		user: '',
		password : '',
		error: false
	})
	let navigate = useNavigate();

	function handleChange(name , value) {

		setState({...state, [name]: value})

	};

	function handleSubmit (){


		if(state.user.length==0 || state.password.length==0){
			return setState({...state, error: "Falta usuario y/o contraseña"});
		}

		let account = {user: state.user, password: state.password}

		API.post('users/login', account).then((data)=>{
			if(data.status==false){
				return setState({...state, error: "Usuario y/o contraseña incorrectos"});
			}else{
				API.save_token(data.data.token);
				navigate('/app')
			}
		})
	}


	return (
	<Fragment>
		<div className="form">
			<div className="formContent">
				<div>
					<img></img>
				</div>
					<form>
						{
							(state.error != false && 
								<div className='alert alert-danger m-3'>{state.error}</div>
							)
						}

						<Input
						attribute={{
							id: "usuario",
							name: "user", 
							type:"text", 
							placeholder:"Usuario",
						}} 
						handleChange={handleChange}
						/>
						<Input
						attribute={{
							id:"contraseña",
							name: "password", 
							type:"password", 
							placeholder:"Contraseña",
						}}
						handleChange={handleChange}
						 />
						<button onClick={handleSubmit} type="button" > Log In </button>
					</form>
			</div>
		</div>
	</Fragment>
	)
}

export default Login;