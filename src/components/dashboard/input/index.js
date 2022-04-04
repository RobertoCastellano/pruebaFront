import {Fragment} from 'react';

const Input = ({attribute, handleChange})=>{

	return (
		<Fragment>
			<input
			id =			{attribute.id}
			name =			{attribute.name}
			placeholder =	{attribute.placeholder}
			type =			{attribute.type}
			onChange =		{ (e) => handleChange (e.target.name, e.target.value) }
			/>
		</Fragment>
	)
};


export default Input;