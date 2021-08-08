import create from 'zustand'
import { get, patch } from '../../axios'

export const useUser = create((set, _get) => ({
	user: null,
	mutations: {
		setUser: (response) => {
			set({user: response})
		},
	},
	actions: {
		getUser: async () => {
			const response = await get('/passenger/5f77acc99ff594f3092b68bc')
			const {mutations} = _get()
			mutations.setUser(response)
		},
		updateUser: async (name) => {
			await patch('/passenger/5f77acc99ff594f3092b68bc', {name})
		},
	},
}))
