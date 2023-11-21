'use client'
import { useState } from 'react'
import { register } from '@/app/services/user'
import Link from 'next/link'

export default function Register() {
	const [name, setName] = useState('')
	const [lastname, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [mensaje, setMensaje] = useState({
		msg: '',
		fallido: false,
	})

	async function handleSubmit(e) {
		e.preventDefault()

		//Validaciones para el formulario
		if ([name, lastname, email, password].includes('')) {
			setMensaje({ msg: 'Todos los campos debe ser llenados', fallido: true })
			setTimeout(() => {
				setMensaje({
					fallido: false,
					msg: '',
				})
			}, 3000)
			return
		}

		if (password.length < 8) {
			setMensaje({ msg: 'La password debe ser de 8 caracteres', fallido: true })
			setTimeout(() => {
				setMensaje({
					fallido: false,
					msg: '',
				})
			}, 3000)
			return
		}

		//Envió a la api
		try {
			const resp = await register({ name, lastname, email, password })
			setMensaje({ msg: resp.data.msg, fallido: false })

			setName('')
			setLastName('')
			setEmail('')
			setPassword('')

			setTimeout(() => {
				setMensaje({
					fallido: false,
					msg: '',
				})
			}, 3000)
		} catch (error) {
			setMensaje({ msg: error.response.data.message, fallido: true })
			setTimeout(() => {
				setMensaje({
					fallido: false,
					msg: '',
				})
			}, 3000)
			return
		}
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
				<h1 className='text-center pb-1'>
					Writ<span className='text-info'>Express</span>
					<p className='text-secondary fs-6 text-center pt-2 fw-semibold'>
						Regístrate y comienza a crear tus artículos
					</p>
				</h1>

				<form
					className=''
					onSubmit={handleSubmit}>
					<div className='d-block mb-4'>
						<label
							htmlFor='nombre'
							className='p-1'>
							Nombre
						</label>
						<input
							type='text'
							id='nombre'
							className='form-control rounded p-2'
							placeholder='Nombre'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className='d-block mb-4'>
						<label
							htmlFor='apellido'
							className='p-1'>
							Apellido
						</label>
						<input
							type='text'
							id='apellido'
							className='form-control rounded p-2'
							placeholder='Apellido'
							value={lastname}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>

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

					<div className='d-block '>
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

					<div className='d-flex  justify-content-center pt-3'>
						<button className='btn bg-info text-white w-50 mt-3 p-2'>
							Registrar
						</button>
					</div>
				</form>
			</main>
			<Link
				href={'/auth/login'}
				className='text-white mt-2 fw-light '>
				Si ya tienes cuenta inicia sesión
			</Link>
		</>
	)
}
