import axios from 'axios';

export const todoService = {
	async getTodoInfo(value, address) {
		const response = await
			axios.post(address, {
				body: value,
				headers: { "Content-Type": "application/json" },
			})

		return response.data
	},
	async getById(value, address) {
		const response = await
			axios.post(address, {
				body: value,
				headers: { "Content-Type": "application/json" },
			})

		return response.data[0]
	},
}

