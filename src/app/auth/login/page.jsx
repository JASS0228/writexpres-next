'use client'

import Link from 'next/link'

export default function Login() {
	return (
		<main className=' bg-white p-5 shadow-sm w-25 rounded '>
			<h1 className='text-center pb-3'>
				Writ<span className='text-info'>Express</span>
			</h1>

			<form className=''>
				<div className='d-block mb-4'>
					<label
						htmlFor='correo'
						className='p-1'>
						Correo
					</label>
					<input
						type='text'
						id='correo'
						className='form-control rounded p-2'
						placeholder='correo@correo.com'
					/>
				</div>

				<div className='d-block mb-4'>
					<label
						htmlFor='password'
						className='p-1'>
						Password
					</label>
					<input
						type='text'
						id='password'
						className='form-control rounded p-2'
						placeholder='contraseña'
					/>
				</div>

				<div className='d-flex  justify-content-center'>
					<button className='btn bg-info text-white w-50 mt-3 p-2'>
						Iniciar Sesión
					</button>
				</div>
			</form>
			<Link
				href={'/auth/register'}
				className='text-black '>
				Si no tienes cuenta regístrate
			</Link>
		</main>
	)
}
