'use client'
import { createArticle } from '@/app/services/articles'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useArticlesStore } from '@/app/stores/articlesStore'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function NewPage() {
	const { articleCreate } = useArticlesStore()
	const router = useRouter()
	const [title, setTitle] = useState('')
	const [seoTitle, setSeoTitle] = useState('')
	const [bodyArticle, setBodyArticle] = useState('')

	const [mensaje, setMensaje] = useState({
		fallido: true,
		msg: '',
	})

	function convertirSlug() {
		let texto = title

		const convertedSlug = texto
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w\-]+/g, '')

		setSeoTitle(convertedSlug)
	}

	async function handleSubmit(e) {
		e.preventDefault()

		//Validar los datos
		if ([title, seoTitle, bodyArticle].includes('')) {
			setMensaje({
				fallido: true,
				msg: 'Todos los campos son obligatorios',
			})

			setTimeout(() => {
				setMensaje({
					fallido: false,
					msg: '',
				})
			}, 3000)
			return
		}

		//Enviar api
		try {
			const resp = await articleCreate({ title, seoTitle, bodyArticle })

			setMensaje({
				msg: resp.data.message,
				fallido: false,
			})

			setTitle('')
			setSeoTitle('')
			setBodyArticle('')

			setTimeout(() => {
				setMensaje({
					msg: '',
					fallido: false,
				})
				router.push('/articles')
			}, 1000)
		} catch (error) {
			console.log(error)
		}

		setTimeout(() => {
			setMensaje({
				msg: '',
				fallido: false,
			})
		}, 3000)
	}

	return (
		<section className=''>
			{mensaje.msg ? (
				<p
					className={` ${
						mensaje.fallido
							? 'bg-danger border-danger-subtle'
							: ' bg-success border-success-subtle'
					}  rounded border  p-2  fw-bold text-white fs-6`}>
					{mensaje.msg}
				</p>
			) : null}
			<div className='d-flex justify-content-between mt-1 '>
				<form
					className='bg-white p-2'
					onSubmit={handleSubmit}>
					<div className='m-3'>
						<label
							htmlFor='titulo'
							className='fw-bold'>
							Titulo
						</label>
						<input
							type='text'
							id='titulo'
							placeholder='Titulo'
							className='form-control'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							onKeyUpCapture={convertirSlug}
						/>
					</div>

					<div className='m-3'>
						<label
							htmlFor='seotitulo'
							className='fw-bold'>
							seoTitulo
						</label>
						<input
							type='text'
							id='seotitulo'
							placeholder='seo-titulo'
							className='form-control'
							value={seoTitle}
							onChange={(e) => setSeoTitle(e.target.value)}
						/>
					</div>

					<div className='m-3 '>
						<label
							htmlFor='contenido'
							className='fw-bold'>
							Contenido
						</label>
						<textarea
							type='text'
							id='contenido'
							placeholder='## Titulo'
							className='form-control inputArea'
							value={bodyArticle}
							onChange={(e) => setBodyArticle(e.target.value)}
						/>
					</div>

					<div className='d-flex justify-content-center p-3'>
						<button
							type='submit'
							className='btn btn-info w-100 text-white fw-bold'>
							Crear
						</button>
					</div>
				</form>

				<div className='w-100 ps-5 mt-3'>
					{bodyArticle.length > 0 ? (
						<Markdown>{bodyArticle}</Markdown>
					) : (
						<p className='text-body-secondary fw-bold pe-5 fs-1 text-left'>
							Escribe en el formulario para ver el contendió
						</p>
					)}
				</div>
			</div>
		</section>
	)
}
