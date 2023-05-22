import { createContext, useContext } from "react";
import { useApp } from './useApp.js';

const Context = createContext();
const Calendar = createContext();
const HeaderContext = createContext();

export const useAppContext = () => {
	return useContext(Context)
}

export const useCalendarContext = () => {
	return useContext(Calendar)
}

export const useHeaderContext = () => {
	return useContext(HeaderContext)
}

export function Provider({ children }) {
	const { textContent, toggle, remove, addTodo, backEndDate, onCalendarChange, changeImages, images, commonClasses, setCommonClasses, error } = useApp()
	return (
		<Context.Provider value={{ textContent, toggle, remove, addTodo, changeImages, images, error }} >
			<HeaderContext.Provider value={{ commonClasses, setCommonClasses }}>
				<Calendar.Provider value={{ backEndDate, onCalendarChange }}>
					{children}
				</Calendar.Provider>
			</HeaderContext.Provider>
		</Context.Provider>
	)
}	