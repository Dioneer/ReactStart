import { useEffect, useRef, useState } from "react";

export function useMissClick(initialState) {
	const [show, setshow] = useState(initialState);
	const ref = useRef(null)

	const missClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) setshow('')
	}

	useEffect(() => {
		document.addEventListener('click', missClick);
		return () => {
			document.removeEventListener('click', missClick);
		}
	}, [])
	return { show, setshow, ref }
};

export function useLocalStorage(key, initvalue) {
	const [local, setLocal] = useState(() => {
		const localValue = localStorage.getItem(key);
		if (localValue !== null) return JSON.parse(localValue);
		return initvalue;
	});
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return { local, setLocal }
};

export function useInput(initvalue) {
	const [input, setInput] = useState(initvalue);

	const reset = () => {
		setInput(initvalue);
	}

	const bind = {
		value: input,
		onChange: e => setInput(e.target.value)
	}
	return { reset, input, bind }
}