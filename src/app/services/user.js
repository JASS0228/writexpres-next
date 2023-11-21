import apiUrl from '../api'

const register = async (values) => {
	return await apiUrl.post('/user/register', values)
}

const login = async (values) => {
	return await apiUrl.post('/user/login', values)
}

const perfil = async () => {
	return await apiUrl.get('/user/perfil')
}

export { register, login, perfil }
