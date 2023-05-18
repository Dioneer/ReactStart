import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['ru', 'en'],
		fallbackLng: 'ru',
		defaultLocale: 'en',
		locales: ['ru', 'en'],
		debug: true,
		ns: ['translation'],
		defaultNS: 'translation',
		detection: {
			order: ['cookie', 'localStorage'],
			caches: ['cookie']
		},
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			crossDomain: true,
			withCredentials: false,
			overrideMimeType: false,
			requestOptions: {
				// used for fetch, can also be a function (payload) => ({ method: 'GET' })
				mode: 'cors',
				credentials: 'same-origin',
				cache: 'default'
			},
			reloadInterval: false
		},
	});

export default i18n;