import axios from 'axios'
import { useAuthStore } from '../stores/authStore'

const apiUrl = axios.create({
	baseURL: 'http://localhost:4000/api/v1',
	withCredentials: true,
})

apiUrl.interceptors.request.use((config) => {
	const token = useAuthStore.getState().token
	config.headers = {
		Authorization: `Bearer ${token}`,
	}
	return config
})

export default apiUrl
