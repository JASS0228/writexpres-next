'use client'
import Link from 'next/link'
import React from 'react'

export default function Article({ article }) {
	return (
		<>
			<div className='bg-white rounded shadow m-3 p-4 w-25 '>
				<h3 className='fw-bold'>{article.title}</h3>
				<p className='pt-2 fs-6 lh-base text-break fw-light texto'>
					{article.body.split('#')}
				</p>

				<div className='d-flex justify-content-between pt-3 flex-wrap  '>
					<Link
						href={'/'}
						className='text-decoration-none p-2 bg-danger rounded-3 text-white fw-bold fs-6'>
						Borrar
					</Link>

					<Link
						href={`/articles/${article.id}`}
						className='text-decoration-none p-2 bg-primary rounded-3 text-white fw-bold fs-6'>
						Actualizar
					</Link>
				</div>
			</div>
		</>
	)
}
