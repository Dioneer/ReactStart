import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// const backend = new HttpApi({ loadPath: 'ReactStart/locales/{{lng}}/translation.json' })

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['ru', 'en'],
		fallbackLng: 'en',
		defaultLocale: 'en',
		locales: ['ru', 'en'],
		debug: true,
		ns: ['translation'],
		defaultNS: 'translation',
		detection: {
			order: ['localStorage', 'cookie'],
			caches: ['localStorage']
		},
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		backend: {
			loadPath: "locales/{{lng}}/translation.json",
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
// ReactStart