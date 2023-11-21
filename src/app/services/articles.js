import apiUrl from '../api'

const getArticles = async () => {
	return await apiUrl.get('/article/obtenerArticulos')
}

const getArticle = async (id) => {
	return await apiUrl.get(`/article/obtenerArticulo/${id}`)
}

const createArticle = async (values) => {
	return await apiUrl.post('/article/crearArticulo', values)
}

const updateArticle = async (values) => {
	return await apiUrl.put(`/article/actualizarArticulo/${values.id}`, values)
}

const deleteArticle = async (values) => {
	return await apiUrl.delete(`/article/borrarArticulo/${values}`)
}

export { getArticles, getArticle, createArticle, updateArticle, deleteArticle }
