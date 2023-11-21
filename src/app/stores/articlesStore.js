import { create } from 'zustand'
import {
	getArticles,
	updateArticle,
	deleteArticle,
	createArticle,
} from '../services/articles'

export const useArticlesStore = create((set, get) => ({
	articles: [],
	isLoading: false,

	addArticles: async () => {
		try {
			set((state) => ({ isLoading: true }))
			const articles = await (await getArticles()).data

			set((state) => ({
				...state,
				articles,
			}))
		} catch (error) {
			console.log(error)
		} finally {
			set((state) => ({ isLoading: false }))
		}
	},

	articleCreate: async (article) => {
		try {
			const resp = await createArticle(article)

			set((state) => ({
				...state,
				articles: [...state.articles, resp.data.articleCreated],
			}))

			return resp
		} catch (error) {
			console.log(error)
		}
	},

	articleUpdate: async (updateArticle) => {
		try {
			const resp = await updateArticle(updateArticle)

			return resp
		} catch (error) {
			console.log(error)
		}
	},

	articlesDelete: async (seoTitle) => {
		try {
			const { data } = await deleteArticle(seoTitle)

			const msg = data

			set((state) => ({
				articles: state.articles.filter(
					(article) => article.seoTitle !== seoTitle
				),
			}))

			return msg
		} catch (error) {
			console.log(error)
		}
	},
}))
