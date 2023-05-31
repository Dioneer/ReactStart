import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { authService } from '../../services/authorization.js';

const initvalue = { login: '', pass: '', repeat: '', email: '' };
const initValidData = { validLogin: false, validEmail: false, validPass: false };
const initButtonValid = { buttonLoginValid: false, buttonRegistrValid: false, buttonforgottenValid: false };

function useForm() {
	const { t } = useTranslation();
	//for css
	const [classes, setClasses] = useState(false);
	const [eyeclasses, setEyeclasses] = useState(false);
	const [repeatEyeclasses, setRepeatEyeclasses] = useState(false);
	//fill
	const [value, setValue] = useState(initvalue);
	//blur
	const [validData, setValidData] = useState(initValidData);
	//text mistake
	const [dataErr, setDataErr] = useState({ passerr: t("auth.passerr"), loginerr: t("auth.loginerr"), emailerr: t("auth.emailerr"), equalerr: t("auth.notthesame") })
	//button valid
	const [buttonValid, setButtonValid] = useState(initButtonValid);
	//main err
	const [error, setError] = useState(false);
	//change type
	const [passType, setPassType] = useState("password");
	const [repeatPassType, setRepeatPassType] = useState("password");

	function enterHandler(e) {
		e.preventDefault();
		if (buttonValid.buttonLoginValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: value.login, pass: value.pass, authorization: true }]
			sendBack(logger, address);
			clear();
		}
	}

	function forgottenHandler(e) {
		e.preventDefault();
		if (buttonValid.buttonLoginValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: value.login, pass: value.pass, forgottenData: true }]
			sendBack(logger, address);
			clear();
		}
	}

	function registrationHandler(e) {
		e.preventDefault();
		if (buttonValid.buttonforgottenValid) {
			const address = 'https://jsonplaceholder.typicode.com/todos/';
			const logger = [{ login: value.login, pass: value.pass, email: value.email, registration: true }]
			sendBack(logger, address);
			clear();
		}
	}

	async function sendBack(value, address) {
		try {
			setError(false)
			const data = await authService.getAuthInfo(value, address)
			console.log(data)
		} catch (e) {
			setError(e.message);
		}
	}

	function emailHandler(e) {
		setValue(prev => ({ ...prev, email: e.target.value }))
		const watch = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if (!watch.test(String(e.target.value).toLowerCase())) {
			setDataErr(prev => ({ ...prev, emailerr: t("auth.uncoremail") }))
		} else setDataErr(prev => ({ ...prev, emailerr: '' }))
	}

	function passHandler(e) {
		setValue(prev => ({ ...prev, pass: e.target.value }))
		if (e.target.value.length < 7 || e.target.value.trim() === '') {
			setDataErr(prev => ({ ...prev, passerr: t("auth.tooeasy") }))
		} else setDataErr(prev => ({ ...prev, passerr: '' }))
	}

	function loginHandler(e) {
		setValue(prev => ({ ...prev, login: e.target.value }))
		if (e.target.value.trim() !== '') setDataErr(prev => ({ ...prev, loginerr: '' }))
	}

	function equalHandler(e) {
		setValue(prev => ({ ...prev, repeat: e.target.value }))
		if (e.target.value === value.pass) { setDataErr(prev => ({ ...prev, equalerr: '' })) }
		else { setDataErr(prev => ({ ...prev, equalerr: t("auth.notthesame") })) }
	}

	function missClick(e) {
		if (e.target.closest(".authorization__eye") || e.target.closest(".input-auth")) { setClasses(true) } else setClasses(false)
	}

	function clear() {
		setValue(initvalue);
		setValidData(initValidData);
		setDataErr({ passerr: t("auth.passerr"), loginerr: t("auth.loginerr"), emailerr: t("auth.emailerr"), equalerr: t("auth.notthesame") });
		setButtonValid(initButtonValid);
	}

	function blur(e) {
		switch (e.target.name) {
			case "login": setValidData(prev => ({ ...prev, validLogin: true }))
				break
			case "password": setValidData(prev => ({ ...prev, validPass: true }))
				break
			case "email": setValidData(prev => ({ ...prev, validEmail: true }))
				break
			case "text": setValidData(prev => ({ ...prev, validPass: true }))
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
		if (dataErr.passerr || dataErr.loginerr || dataErr.emailerr || dataErr.equalerr) {
			setButtonValid(prev => ({ ...prev, buttonRegistrValid: false }))
		} else {
			setButtonValid(prev => ({ ...prev, buttonRegistrValid: true }))
		}
	}, [dataErr.passerr, dataErr.loginerr, dataErr.emailerr, dataErr.equalerr])

	useEffect(() => {
		if (dataErr.passerr || dataErr.loginerr) {
			setButtonValid(prev => ({ ...prev, buttonLoginValid: false }))
		} else {
			setButtonValid(prev => ({ ...prev, buttonLoginValid: true }))
		}
	}, [dataErr.passerr, dataErr.loginerr])

	useEffect(() => {
		if (dataErr.passerr || dataErr.loginerr || dataErr.equalerr) {
			setButtonValid(prev => ({ ...prev, buttonforgottenValid: false }))
		} else {
			setButtonValid(prev => ({ ...prev, buttonforgottenValid: true }))
		}
	}, [dataErr.passerr, dataErr.loginerr, dataErr.equalerr])


	return { classes, eyeclasses, error, sawPass, blur, loginHandler, enterHandler, passType, focus, emailHandler, registrationHandler, passHandler, equalHandler, repeatEyeclasses, repeatPassType, forgottenHandler, value, validData, dataErr, buttonValid }
}

export default useForm;