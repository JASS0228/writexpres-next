'use client'
import { deleteArticle } from '@/app/services/articles'
import { useArticlesStore } from '@/app/stores/articlesStore'
import Link from 'next/link'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function Article({ article }) {
	const { articlesDelete } = useArticlesStore()
	const [show, setShow] = useState(false)

	const [mensaje, setMensaje] = useState({
		fallido: true,
		msg: '',
	})

	const handleClick = async (seoTitle) => {
		if (show) {
			await articlesDelete(seoTitle)
		}
	}

	return (
		<>
			<Modal
				show={show}
				onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Deseas borrar este articulo</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					"{article.seoTitle}" este articulo se va borrar para siempre estas
					seguro?
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={() => setShow(false)}>
						Cerrar
					</Button>
					<Button
						variant='danger'
						onClick={() => {
							handleClick(article.seoTitle)
							setShow(false)
						}}>
						Borrar
					</Button>
				</Modal.Footer>
			</Modal>
			<div className='bg-white rounded shadow m-3 p-4 w-25 '>
				<h3 className='fw-bold'>{article.title}</h3>
				<p className='pt-2 fs-6 lh-base text-break fw-light texto'>
					{article.bodyArticle.split('#')}
				</p>

				<div className='d-flex justify-content-between pt-3 flex-wrap  '>
					<button
						type='button'
						className='text-decoration-none p-2 bg-danger rounded-3 text-white fw-bold fs-6'
						onClick={() => {
							setShow(true)
						}}>
						Borrar
					</button>

					<Link
						href={`/articles/${article.seoTitle}`}
						className='text-decoration-none p-2 bg-primary rounded-3 text-white fw-bold fs-6'>
						Actualizar
					</Link>
				</div>
			</div>
		</>
	)
}
