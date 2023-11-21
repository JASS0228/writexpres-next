'use client'
import React, { useEffect } from 'react'
import Article from '@/components/ListArticles'
import { useAuthStore } from '../stores/authStore'
import { useArticlesStore } from '../stores/articlesStore'

export default function Articles() {
	const { addArticles } = useArticlesStore()
	const articles = useArticlesStore((state) => state.articles)
	const isLoading = useArticlesStore((state) => state.isLoading)
	const auth = useAuthStore((state) => state.auth)

	useEffect(() => {
		addArticles()
	}, [])

	return (
		<>
			<div className='container mb-3 mt-4 '>
				<h2 className='text-left'>
					Bienvenido{' '}
					{isLoading ? (
						<p>Cargando...</p>
					) : (
						<span className='text-info fw-bold'>
							{auth.name} {auth.lastname}
						</span>
					)}
				</h2>
			</div>

			{isLoading ? (
				<p>Cargando Articulos</p>
			) : (
				<section className='d-flex flex-wrap align-items-center justify-content-center gap-2'>
					{articles.length > 0 ? (
						articles.map((article) => (
							<Article
								key={article._id}
								article={article}
							/>
						))
					) : (
						<p className='fw-bold fs-2'>
							No hay artículos
							<span className='fw-light '>,agregar mas artículos</span>
						</p>
					)}
				</section>
			)}
		</>
	)
}
