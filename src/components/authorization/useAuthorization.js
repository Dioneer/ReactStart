import { useState, useRef, useEffect } from "react";

function useAuthorization() {
	const [classes, setClasses] = useState(false);
	const [eyeclasses, setEyeclasses] = useState(false);
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');
	const [validLogin, setValidLogin] = useState(false);
	const [validPass, setValidPass] = useState(false);
	const [passerr, setPasserr] = useState("err");
	const [loginerr, setLoginerr] = useState("err");
	const [buttonValid, setButtonValid] = useState(false);
	const eyeref = useRef(null)
	const passref = useRef(null)
	const [error, setError] = useState(false);

	function submitHandler(e) {
		e.preventDefault();
		const address = 'https://jsonplaceholder.typicode.com/todos/';
		const logger = [{ login: login, pass: pass, authorization: true }]
		sendBack(logger, address);
		clear();
	}

	async function sendBack(value, address) {
		try {
			setError(false)
			const response = await fetch(address, {
				body: JSON.stringify(value),
				headers: { "Content-Type": "application/json" },
				method: "POST",
			})
			const data = await response.json();
			console.log(data)
		} catch (e) {
			setError(e.message);
		}
	}

	function validHandler(e) {
		switch (e.target.name) {
			case "login": setLogin(e.target.value); if (login.trim() !== '') setLoginerr('')
				break
			case "password": setPass(e.target.value); if (pass.trim() !== '') setPasserr('')
				break
			default:
		}
	}

	function missClick(e) {
		if (e.target.closest(".authorization__eye") || e.target.closest(".input-auth")) { setClasses(true) } else setClasses(false)
	}

	function clear() {
		setLogin('');
		setPass('');
		setValidLogin(false);
		setValidPass(false);
		setLoginerr('err');
		setPasserr('err');
		setButtonValid(false);
	}

	function blur(e) {
		switch (e.target.name) {
			case "login": setValidLogin(true)
				break
			case "password": setValidPass(true)
				break
			default:
		}
	}

	function sawPass() {
		setEyeclasses(prev => !prev);
		if (eyeref.current.classList.contains('active')) {
			passref.current.setAttribute("type", "password")
		}
		else { passref.current.setAttribute("type", "text") }
	}

	useEffect(() => {
		document.addEventListener('click', missClick);
		return () => {
			document.removeEventListener('click', missClick);
		}
	}, [])

	useEffect(() => {
		if (passerr || loginerr) {
			setButtonValid(false)
		} else { setButtonValid(true) }
	}, [passerr, loginerr])

	return { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, validHandler, submitHandler, buttonValid, passref, eyeref, loginerr, passerr, login, pass }
}

export default useAuthorization;