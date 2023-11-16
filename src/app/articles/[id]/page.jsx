import React from 'react'

export default function ActualizarPost({ params }) {
	return (
		<section className=''>
			<div className='d-flex justify-content-between mt-1 '>
				<form className='bg-white p-2'>
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
					<p className='text-body-secondary fw-bold pe-5 fs-1 text-left'>
						Escribe en el formulario para ver el contendió
					</p>
				</div>
			</div>
		</section>
	)
}
