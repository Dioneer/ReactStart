import axios from 'axios';

export const authService = {
	async getAuthInfo(value, address) {
		const response = await
			axios.post(address, {
				body: value,
				headers: { "Content-Type": "application/json" },
			})

		return response.data
	},
}