'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'next/navigation'
import { perfil } from '../services/user'

export default function Layout({ children }) {
	const router = useRouter()
	const auth = useAuthStore((state) => state.auth)
	const setAuth = useAuthStore((state) => state.setAuth)

	useEffect(() => {
		if (!localStorage.getItem('_session')) {
			router.push('/auth/login')
			return
		}

		async function getVerify() {
			try {
				const resp = await perfil()
				setAuth(resp.data)
			} catch (error) {
				console.log(error)
			}
		}

		getVerify()
	}, [])

	const handleClick = () => {
		if (!localStorage.getItem('_session')) {
			router.push('/auth/login')
			return
		}

		localStorage.removeItem('_session')
		router.push('/auth/login')
	}

	return (
		<>
			{auth.id ? (
				<>
					<div className='bg-white pb-1 pt-2 mt-0 shadow pb-2 position-sticky'>
						<nav className='d-flex align-items-center justify-content-between ms-4 mt-2 '>
							<Link
								href={'/articles'}
								className='fw-bold text-decoration-none text-dark fs-2'>
								Writ<span className='text-info'>Express</span>
							</Link>
							<div className='d-flex me-4 gap-4'>
								<Link
									href={'/articles'}
									className='fw-bold bold text-decoration-none text-dark fs-6'>
									Home
								</Link>

								<Link
									href={'/articles/nuevopost'}
									className='fw-bold bold text-decoration-none text-dark fs-6'>
									Nuevo Post
								</Link>
								<Link
									href={'/articles/consultarApi'}
									className='fw-bold bold text-decoration-none text-dark fs-6'>
									Api
								</Link>
								<div>
									<a
										className='text-decoration-none text-white bg-danger fw-bold p-2 rounded btn-hover'
										type='submit'
										onClick={() => handleClick()}>
										Cerrar Sesión
									</a>
								</div>
							</div>
						</nav>
					</div>

					<main className=''>{children}</main>
				</>
			) : (
				<p>Cargando</p>
			)}
		</>
	)
}
