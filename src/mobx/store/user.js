import { makeAutoObservable } from 'mobx'
import { get, patch } from '../../axios'

export const userStore = makeAutoObservable({
	user: null,
	setUser (data) {
		userStore.user = data
	},
	async getUser () {
		const response = await get('/passenger/5f77acc99ff594f3092b68bc')
		userStore.setUser(response)
	},
	async updateUser (name) {
		await patch('/passenger/5f77acc99ff594f3092b68bc', {name})
	},
})
