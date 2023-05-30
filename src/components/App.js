import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "../pages/AuthorizationPage";
import MainPage from "../pages/MainPage";
import RegistrationPage from '../pages/RegistrationPage.js';
import ForgottenDataPage from "../pages/ForgottenDataPage";
import NotFoundPage from '../pages/404page.js';
import Wrapper from "./UI/wrapper";

function App() {
	return (
		<BrowserRouter>
			<Wrapper>
				<Routes>
					<Route path={'/ReactStart'} exact element={<AuthorizationPage />}></Route>
					<Route path={'/ReactStart/main'} element={<MainPage />}></Route>
					<Route path={'/ReactStart/registr'} element={<RegistrationPage />}></Route>
					<Route path={'/ReactStart/forgottten'} element={<ForgottenDataPage />}></Route>
					<Route path={'/ReactStart/notfound'} element={<NotFoundPage />}></Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}


export default App;
