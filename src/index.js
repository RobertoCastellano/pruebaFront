import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//MAIN
import Favoritos from './pages/Favoritos';
import ListFav from './components/ListFav';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<BrowserRouter>
			<Routes>
				<Route path="/favoritos/:id" element={<ListFav/>}/>
				<Route path="/favoritos" element={<Favoritos/>}/>
				<Route path="/" element={<App/>}/>
			</Routes>	
		</BrowserRouter>
	</React.Fragment>
);


