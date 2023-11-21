'use client'
import { getArticle, updateArticle } from '@/app/services/articles'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/app/stores/authStore'
import Markdown from 'react-markdown'

export default function ActualizarPost({ params }) {
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

	useEffect(() => {
		try {
			getArticle(params.id).then((res) => {
				const { title, seoTitle, bodyArticle } = res.data

				setTitle(title), setSeoTitle(seoTitle), setBodyArticle(bodyArticle)
			})
		} catch (error) {
			console.log(error)
		}
	}, [])

	async function handleSubmit(e) {
		const { id } = params
		e.preventDefault()

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

		try {
			const resp = await updateArticle({ id, title, seoTitle, bodyArticle })
			setMensaje({
				fallido: false,
				msg: resp.data.message,
			})

			setSeoTitle('')
			setBodyArticle('')
			setTitle('')

			setTimeout(() => {
				setMensaje({
					fallido: false,
					msg: '',
				})
				router.push('/articles')
			}, 2000)
			return
		} catch (error) {
			setMensaje({
				fallido: true,
				msg: error.data.message,
			})

			setTimeout(() => {
				setMensaje({
					fallido: true,
					msg: '',
				})
			}, 3000)
		}
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

					<div className='m-2'>
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
							Modificar
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
