
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "assets/css/styles.css";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';


ReactDOM.render(
	<RecoilRoot>
		<BrowserRouter>
			<Switch>
				<Route path="/admin" render={(props) => <AdminLayout {...props} />} />
				<Route path="/auth" render={(props) => <AuthLayout {...props} />} />
				<Redirect from="/" to="/admin/index" />
			</Switch>
		</BrowserRouter>
	</RecoilRoot>,
	document.getElementById('root')
);
