/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
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
				}
			},
		},
	},
	plugins: [{
		tailwindcss: {},
		autoprefixer: {},
	}],
}