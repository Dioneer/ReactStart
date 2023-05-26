import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "../pages/AuthorizationPage";
import MainPage from "../pages/MainPage";
import RegistrationPage from '../pages/RegistrationPage.js';

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Routes>
					<Route path={'/ReactStart'} exact element={<AuthorizationPage />}></Route>
					<Route path={'/ReactStart/main'} element={<MainPage />}></Route>
					<Route path={'/ReactStart/registr'} element={<RegistrationPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}


export default App;
