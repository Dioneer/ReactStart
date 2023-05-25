/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
	content: ["./src/**/*.{html,js, scss}"],
	darkMode: 'class',
	theme: {
		extend: {
			flex: {
				100: '1 1 100%'
			},
			margin: {
				'center': '0 auto',
				'l': '10px',
			},
			width: {
				'100': '100%',
			},
			height: {
				'100': '100%',
			},
			maxWidth: {
				'full': '106.25rem',
				'100': '100%',
			},
			gridTemplateColumns: {
				'cc': '1fr repeat(2, auto)',
			},
			transitionTimingFunction: {
				'ease-out-cur': 'cubic-bezier(.9,.76,.76,1.32)',
			},
			transitionProperty: {
				'burg': 'all',
			},
			animation: {
				'drug': 'drug 1s ease 0s',
				'width': 'width 0.4s ease 0s forwards',
				'backwidth': '0.3s ease-in 0s forwards',
				'scale': '0.4s ease-in-out 0s',
			},
			keyframes: {
				drug: {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(50deg)'
					},

					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				width: {
					'0%': {
						'max-width': '100%'
					},
					'100%': {
						'max-width': 'calc(100% * 0.667)'
					}
				},
				backwidth: {
					'0%': {
						'max-width': 'calc(100%*0.667)'
					},
					'100%': {
						'max-width': '100%'
					}
				},
				scale: {
					'0%': {
						opacity: '0',
						transform: ' scale(1, 0)',
					},
					'50%': {
						opacity: '0.3'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1, 1)'
					}
				}
			},
		},
	},
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		plugin(({ addComponents }) => {
			addComponents({
				'.wrapper': {
					'min-height': '100%',
					'width': '100%',
					'display': 'flex',
					'overflow': 'auto',
					'flex-direction': 'column',
					'position': 'relative',
				},
				'.container': {
					'flex': '1 1 auto',
					'max-width': '1700px',
					'width': '100%',
					'margin': '0 auto',
					'display': 'flex',
					'flex-direction': 'column',
				},
				".title": {
					'font-size': '23px',
					'line-height': '46px',
					'font-family': 'Arial, Helvetica, sans-serif',
					'text-transform': 'uppercase',
					'font-weight': '700',
					'letter-spacing': '3px',
					'margin': '0px 10px 0px 0px',
					'@media(max-width: 767.98px)':
					{
						'font-size': '20px',
						'line-height': '26px',
					}
				},
				".button": {
					'display': 'flex',
					'padding': '10px 20px',
					'justify-content': 'center',
					'align-items': 'center',
					'font-size': '1rem',
					'color': '#666',
					'text-transform': 'uppercase',
					'margin': '0 5px 0 0',
					'border-radius': '30px',
					'line-height': '24px',
					'@media(max-width: 767.98px)': {
						'font-size': ' 0.9rem',
					},
					'@media(max-width: 479.98px)': {
						'font-size': '0.8rem',
						'padding': '10px',
					},
					"&:hover": {
						'box-shadow': '0 0 3px #333',
					},
				},
				'.input': {
					'flex': '1 1 auto',
					'display': 'flex',
					'align-items': ' center',
					'padding': '5px',
					'font-size': '14px',
					'color': '#999',
					'border': '1px solid #333',
					'border-radius': '10px',
					'margin': '0px 10px 0px 0px',
				},
				'.input.active': {
					'color': '#333',
					'border': '1px solid rgb(241, 166, 38)',
				},
				'body.lock': {
					'overflow': 'hidden',
				}
			})
		})
	],
}
