import { createContext, useContext } from "react";
export const Context = createContext();
export const Calendar = createContext();
export const HeaderContext = createContext();

export const useAppContext = () => {
	return useContext(Context)
}

export const useCalendarContext = () => {
	return useContext(Calendar)
}

export const useHeaderContext = () => {
	return useContext(HeaderContext)
}