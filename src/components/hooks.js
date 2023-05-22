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
}