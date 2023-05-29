import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function useForm() {
	const { t } = useTranslation();
	//for css
	const [classes, setClasses] = useState(false);
	const [eyeclasses, setEyeclasses] = useState(false);
	const [repeatEyeclasses, setRepeatEyeclasses] = useState(false);
	//fill
	const [login, setLogin] = useState('');
	const [pass, setPass] = useState('');
	const [repeat, setRepeat] = useState('');
	const [email, setEmail] = useState('');
	//blur
	const [validLogin, setValidLogin] = useState(false);
	const [validEmail, setValidEmail] = useState(false);
	const [validPass, setValidPass] = useState(false);
	//text mistake
	const [passerr, setPasserr] = useState(t("auth.passerr"));
	const [loginerr, setLoginerr] = useState(t("auth.loginerr"));
	const [emailerr, setEmailerr] = useState(t("auth.emailerr"));
	const [equal, setEqual] = useState(t("auth.notthesame"));
	//button valid
	const [buttonLoginValid, setButtonLoginValid] = useState(false);
	const [buttonRegistrValid, setButtonRegistrValid] = useState(false);
	const [buttonforgottenValid, setButtonforgottenValid] = useState(false);
	//main err
	const [error, setError] = useState(false);
	//change type
	const [passType, setPassType] = useState("password");
	const [repeatPassType, setRepeatPassType] = useState("password");

	function enterHandler(e) {
		e.preventDefault();
		if (buttonLoginValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: login, pass: pass, authorization: true }]
			sendBack(logger, address);
			clear();
		}
	}

	function forgottenHandler(e) {
		e.preventDefault();
		if (buttonLoginValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: login, pass: pass, forgottenData: true }]
			sendBack(logger, address);
			clear();
		}
	}

	function registrationHandler(e) {
		e.preventDefault();
		if (buttonforgottenValid) {
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
			setEmailerr(t("auth.uncoremail"))
		} else setEmailerr("")
	}

	function passHandler(e) {
		setPass(e.target.value)
		if (e.target.value.length < 7) { setPasserr(t("auth.tooeasy")) }
		else setPasserr("")
	}

	function loginHandler(e) {
		setLogin(e.target.value);
		if (login.trim() !== '') setLoginerr('')
	}

	function equalHandler(e) {
		setRepeat(e.target.value);
		if (e.target.value === pass) { setEqual('') }
		else { setEqual(t("auth.notthesame")) }
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
		setLoginerr(t("auth.loginerr"));
		setPasserr(t("auth.passerr"));
		setEmailerr(t("auth.emailerr"));
		setEqual(t("auth.notthesame"));
		setButtonLoginValid(false);
		setButtonRegistrValid(false);
	}

	function blur(e) {
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

	useEffect(() => {
		if (passerr || loginerr || equal) {
			setButtonforgottenValid(false)
		} else {
			setButtonforgottenValid(true)
		}
	}, [passerr, loginerr, equal])


	return { classes, eyeclasses, validLogin, validPass, error, sawPass, blur, loginHandler, enterHandler, loginerr, passerr, login, pass, passType, focus, email, validEmail, emailerr, emailHandler, registrationHandler, buttonRegistrValid, buttonLoginValid, passHandler, equalHandler, repeat, repeatEyeclasses, repeatPassType, equal, forgottenHandler, buttonforgottenValid }
}

export default useForm;