import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//MAIN
import App from './pages/App';
import ListPokes from './pages/ListPokes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<BrowserRouter>
			<Routes>
				<Route path="/pokemones" element={<ListPokes/>}/>
				<Route path="/" element={<App/>}/>
			</Routes>	
		</BrowserRouter>
	</React.Fragment>
);


