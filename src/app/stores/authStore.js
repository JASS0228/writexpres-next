import { create } from 'zustand'
import { perfil } from '../services/user'

export const useAuthStore = create((set) => ({
	token: '',
	auth: {},
	cargando: true,

	setToken: (token) => {
		localStorage.setItem('_session', token)
		set({ token })
	},
	setAuth: (auth) => {
		set({ auth })
	},
}))
