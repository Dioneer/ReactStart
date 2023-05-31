import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "../pages/AuthorizationPage";
import MainPage from "../pages/MainPage";
import RegistrationPage from '../pages/RegistrationPage.js';
import ForgottenDataPage from "../pages/ForgottenDataPage";
import NotFoundPage from '../pages/404page.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/ReactStart'} element={<AuthorizationPage />}></Route>
				<Route path={'/ReactStart/main'} element={<MainPage />}></Route>
				<Route path={'/ReactStart/registr'} element={<RegistrationPage />}></Route>
				<Route path={'/ReactStart/forgottten'} element={<ForgottenDataPage />}></Route>
				<Route path={'/ReactStart/notfound'} element={<NotFoundPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}


export default App;
