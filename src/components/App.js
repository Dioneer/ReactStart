import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthorizationPage from "../pages/AuthorizationPage";
import MainPage from "../pages/MainPage";

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Routes>
					<Route path={'/'} exact element={<AuthorizationPage />}></Route>
					<Route path={'/main'} element={<MainPage />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}


export default App;
