'use client'
import React from 'react'
import Article from '@/components/ListArticles'

export default function Articles() {
	const articles = [
		{
			id: 1,
			title: 'How to dev',
			seoTitle: 'how-to-dev',
			body: `
                ## Irure proident ut consectetur esse consectetur elit officia eiusmod quis. ajsaujshauhsauhjsaujnhsaiuihsauijsauhjsahdiuahdua
            `,
		},
		{
			id: 2,
			title: 'How to dev',
			seoTitle: 'how-to-dev',
			body: `
                ## Irure proident ut consectetur esse consectetur elit officia eiusmod quis. ajsaujshauhsauhjsaujnhsaiuihsauijsauhjsahdiuahdua
            `,
		},
		{
			id: 3,
			title: 'How to dev',
			seoTitle: 'how-to-dev',
			body: `
                ## Irure proident ut consectetur esse consectetur elit officia eiusmod quis. ajsaujshauhsauhjsaujnhsaiuihsauijsauhjsahdiuahdua
            `,
		},
		{
			id: 4,
			title: 'How to dev',
			seoTitle: 'how-to-dev',
			body: `
                ## Irure proident ut consectetur esse consectetur elit officia eiusmod quis. ajsaujshauhsauhjsaujnhsaiuihsauijsauhjsahdiuahdua
            `,
		},
	]

	return (
		<>
			<div className='container mb-3 mt-4 '>
				<h2 className='text-left'>
					Bienvenido <span className='text-info fw-bold'>Jonathan Salazar</span>
				</h2>
			</div>
			<section className='d-flex flex-wrap align-items-center justify-content-center gap-2'>
				{articles.map((article) => (
					<Article
						key={article.id}
						article={article}
					/>
				))}
			</section>
		</>
	)
}
