import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// MAIN
	import Home from './pages/home';
	import Contact from './pages/contact';
	import About from './pages/about_us';
	import Blog from './pages/blog';
	import Teacch from './pages/teacch';
	import Panel from './pages/app';
	import Login from './components/dashboard/login';

// IMPORTS
	import Profesionales from './components/dashboard/profesionales';
	import ProfesionalesEdit from './components/dashboard/profesionales/edit';
	import ProfesionalesDelete from './components/dashboard/profesionales/delete';
	import Post from './components/dashboard/post';
	import PostAdd from './components/dashboard/post/add';
	import PostEdit from './components/dashboard/post/edit';
	import PostDelete from './components/dashboard/post/delete';
	import Pages from './components/dashboard/pages';
	import PagesAdd from './components/dashboard/pages/add';
	import PagesEdit from './components/dashboard/pages/edit';
	import PagesDelete from './components/dashboard/pages/delete';
	import Categories from './components/dashboard/categories';
	import CategoriesAdd from "./components/dashboard/categories/add";
	import CategoriesEdit from "./components/dashboard/categories/edit";
	import CategoriesDelete from "./components/dashboard/categories/delete";
	import Leads from './components/dashboard/leads';
	import LeadsDelete from './components/dashboard/leads/delete';
	import Config from './components/dashboard/config';

ReactDOM.render(
	<React.Fragment>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/about_us" element={<About/>} />
				<Route path="/blog" element={<Blog/>} />
				<Route path="/teacch" element={<Teacch/>} />
				<Route path="/login/" element={<Login/>} />
				<Route path="/app/" element={<Panel/>} />
				<Route path="/app/profesionales" element={<Panel content={<Profesionales />} />} />
				<Route path="/app/profesionales/edit/:id" element={<Panel content={<ProfesionalesEdit />} />} />
				<Route path="/app/profesionales/delete/:id" element={<Panel content={<ProfesionalesDelete />} />} />
				<Route path="/app/post" element={<Panel content={<Post />} />} />
				<Route path="/app/post/add" element={<Panel content={<PostAdd />} />} />
				<Route path="/app/post/edit/:id" element={<Panel content={<PostEdit />} />} />
				<Route path="/app/post/delete/:id" element={<Panel content={<PostDelete />} />} />
				<Route path="/app/pages" element={<Panel content={<Pages />} />} />
				<Route path="/app/pages/add" element={<Panel content={<PagesAdd />} />} />
				<Route path="/app/pages/edit/:id" element={<Panel content={<PagesEdit />} />} />
				<Route path="/app/pages/delete/:id" element={<Panel content={<PagesDelete />} />} />
				<Route path="/app/categories" element={<Panel content={<Categories />} />} />
				<Route path="/app/categories/add" element={<Panel content={<CategoriesAdd />} />} />
				<Route path="/app/categories/edit/:id" element={<Panel content={<CategoriesEdit />} />} />
				<Route path="/app/categories/delete/:id" element={<Panel content={<CategoriesDelete />} />} />
				<Route path="/app/leads" element={<Panel content={<Leads />} />} />
				<Route path="/app/leads/delete/:id" element={<Panel content={<LeadsDelete />} />} />
				<Route path="/app/leads/delete/:id" element={<Panel content={<LeadsDelete />} />} />
				<Route path="/app/config" element={<Panel content={<Config />} />} />
			</Routes>
		</BrowserRouter>
	</React.Fragment>
	,
	document.getElementById('root')
);
