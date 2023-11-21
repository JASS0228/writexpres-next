'use client'
import { useState } from 'react'
import { login, perfil } from '@/app/services/user'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAuthStore } from '@/app/stores/authStore'

export default function Login() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const setToken = useAuthStore((state) => state.setToken)

	const [mensaje, setMensaje] = useState({
		msg: '',
		fallido: false,
	})

	async function handleSubmit(e) {
		e.preventDefault()

		//validaciones
		if ([email, password].includes('')) {
			setMensaje({
				msg: 'Todos los campos son obligatorios',
				fallido: true,
			})

			setTimeout(() => {
				setMensaje({
					msg: '',
					fallido: false,
				})
			}, 3000)
			return
		}

		//Enviando la info al a api
		try {
			const resp = await login({ email, password })
			setToken(resp?.data?.access_token)
			router.push('/articles')
			return
		} catch (error) {
			setMensaje({ msg: error?.response?.data?.message, fallido: true })
		}

		setTimeout(() => {
			setMensaje({
				fallido: false,
				msg: '',
			})
		}, 3000)
	}

	return (
		<>
			{mensaje.msg ? (
				<p
					className={` ${
						mensaje.fallido
							? 'bg-danger border-danger-subtle'
							: ' bg-success border-success-subtle'
					}  rounded border  p-2 mb-3 fw-bold text-white fs-6`}>
					{mensaje.msg}
				</p>
			) : null}
			<main className=' bg-white p-5 shadow-sm w-25 rounded '>
				<h1 className='text-center pb-3'>
					Writ<span className='text-info'>Express</span>
				</h1>

				<form
					className=''
					onSubmit={handleSubmit}>
					<div className='d-block mb-4'>
						<label
							htmlFor='correo'
							className='p-1'>
							Correo
						</label>
						<input
							type='email'
							id='correo'
							className='form-control rounded p-2'
							placeholder='correo@correo.com'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className='d-block mb-4'>
						<label
							htmlFor='password'
							className='p-1'>
							Password
						</label>
						<input
							type='password'
							id='password'
							className='form-control rounded p-2'
							placeholder='contraseña'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className='d-flex  justify-content-center'>
						<button className='btn bg-info text-white w-50 mt-3 p-2'>
							Iniciar Sesión
						</button>
					</div>
				</form>
			</main>
			<Link
				href={'/auth/register'}
				className='text-white fw-light mt-2 '>
				Si no tienes cuenta regístrate
			</Link>
		</>
	)
}
