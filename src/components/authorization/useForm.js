import { useState, useEffect, useRef } from "react";

function useForm() {
	const [classes, setClasses] = useState(false);
	const [eyeclasses, setEyeclasses] = useState(false);
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');
	const [repeat, setRepeat] = useState('');
	const [email, setEmail] = useState('');
	const [validLogin, setValidLogin] = useState(false);
	const [validEmail, setValidEmail] = useState(false);
	const [repeatEyeclasses, setRepeatEyeclasses] = useState(false);
	const [validPass, setValidPass] = useState(false);
	const [passerr, setPasserr] = useState("Pass can't be empty");
	const [loginerr, setLoginerr] = useState("err");
	const [emailerr, setEmailerr] = useState("Pass can't be empty");
	const [equal, setEqual] = useState("Passes not the same");
	const [buttonLoginValid, setButtonLoginValid] = useState(false);
	const [buttonRegistrValid, setButtonRegistrValid] = useState(false);
	const [error, setError] = useState(false);
	const [passType, setPassType] = useState("password");
	const [repeatPassType, setRepeatPassType] = useState("password");
	const passRef = useRef(null);

	function submitHandler(e) {
		e.preventDefault();
		if (buttonLoginValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: login, pass: pass, authorization: true }]
			sendBack(logger, address);
			clear();
		}
	}

	function registrationHandler(e) {
		e.preventDefault();
		if (buttonRegistrValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: login, pass: pass, email: email, registration: true }]
			sendBack(logger, address);
			clear();
		}
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

	function emailHandler(e) {
		setEmail(e.target.value)
		const watch = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!watch.test(String(e.target.value).toLowerCase())) {
			setEmailerr("Uncorrect email")
		} else setEmailerr("")
	}

	function passHandler(e) {
		setPass(e.target.value)
		if (e.target.value.length < 7) { setPasserr("Too easy pass, please, enter more than 7 simbols") }
		else setPasserr("")
	}

	function loginHandler(e) {
		setLogin(e.target.value);
		if (login.trim() !== '') setLoginerr('')
	}

	function equalHandler(e) {
		setRepeat(e.target.value);
		console.log(e.target.value !== pass)
		if (e.target.value === pass) { setEqual('') }
		else { setEqual("Passes not the same") }
	}

	function missClick(e) {
		if (e.target.closest(".authorization__eye") || e.target.closest(".input-auth")) { setClasses(true) } else setClasses(false)
	}

	function clear() {
		setLogin('');
		setPass('');
		setEmail('');
		setRepeat('')
		setValidLogin(false);
		setValidPass(false);
		setValidEmail(false);
		setLoginerr('err');
		setPasserr("Pass can't be empty");
		setEmailerr("Pass can't be empty");
		setEqual("Pass can't be empty");
		setButtonLoginValid(false);
		setButtonRegistrValid(false);
	}

	function blur(e) {
		console.log(1)
		switch (e.target.name) {
			case "login": setValidLogin(true)
				break
			case "password": setValidPass(true)
				break
			case "email": setValidEmail(true)
				break
			case "text": setValidPass(true)
				break
			default:
		}
	}

	const sawPass = (e) => {
		if (e.target.closest('.authorization__eye.pass'))
			setEyeclasses(prev => !prev);
		else { setRepeatEyeclasses(prev => !prev); }
	}

	const focus = (e) => {
		if (e.target.closest('.authorization__eye.pass')) {
			if (passType === 'password') {
				setPassType('text')
			}
			else { setPassType('password') }
		} else {
			if (repeatPassType === 'password') {
				setRepeatPassType('text')
			}
			else { setRepeatPassType('password') }

		}
	}

	useEffect(() => {
		document.addEventListener('click', missClick);
		return () => {
			document.removeEventListener('click', missClick);
		}
	}, [])

	useEffect(() => {
		if (passerr || loginerr || emailerr || equal) {
			setButtonRegistrValid(false)
		} else {
			setButtonRegistrValid(true)
		}
	}, [passerr, loginerr, emailerr, equal])

	useEffect(() => {
		if (passerr || loginerr) {
			setButtonLoginValid(false)
		} else {
			setButtonLoginValid(true)
		}
	}, [passerr, loginerr])


	return { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, loginHandler, submitHandler, loginerr, passerr, login, pass, passType, focus, passRef, email, validEmail, emailerr, emailHandler, registrationHandler, buttonRegistrValid, buttonLoginValid, passHandler, equalHandler, repeat, repeatEyeclasses, repeatPassType, equal }
}

export default useForm;