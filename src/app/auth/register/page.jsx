'use client'

export default function Register() {
	return (
		<main className=' bg-white p-5 shadow-sm w-25 rounded '>
			<h1 className='text-center pb-1'>
				Writ<span className='text-info'>Express</span>
				<p className='text-secondary fs-6 text-center pt-2 fw-semibold'>
					Regístrate y comienza a crear tus artículos
				</p>
			</h1>

			<form className=''>
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
					/>
				</div>

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

				<div className='d-block '>
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

				<div className='d-flex  justify-content-center pt-3'>
					<button className='btn bg-info text-white w-50 mt-3 p-2'>
						Iniciar Sesión
					</button>
				</div>
			</form>
		</main>
	)
}
