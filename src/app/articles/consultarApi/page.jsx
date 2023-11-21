'use client'
import { useAuthStore } from '@/app/stores/authStore'

export default function page() {
	const auth = useAuthStore((state) => state.auth)

	console.log(auth)

	return (
		<>
			<section className='container'>
				<h2 className='mt-5 fw-bold'>Bienvenidos esta sección de api</h2>
				<p>
					Esta sección le daremos una url donde pueden consultar a esa url y
					obtener todos los artículos que crearon
				</p>

				<p className='fw-light'>
					Esta seria la url de la api
					"http://localhost:4000/api/v1/user/getArticlesByToken/{auth.token}"
				</p>

				<h3>Dudas</h3>
				<p>
					Si tienes dudas de como renderizar el markdown te dejamos una lista
					para entornos de javascript o typescript
				</p>

				<ul>
					<li>
						Puedes usar esta librería si usas React{' '}
						<span className='fw-bold'>react markdown</span>{' '}
						<a
							href='https://www.npmjs.com/package/react-markdown#use'
							target='_blank'>
							Enlace del la librería
						</a>
					</li>

					<li>
						Puedes usar esta librería si usas Vue{' '}
						<span className='fw-bold'>vue-markdown-render</span>{' '}
						<a
							href='https://www.npmjs.com/package/vue-markdown-render'
							target='_blank'>
							Enlace del la librería
						</a>
					</li>

					<li>
						Puedes usar esta librería si usas Angular{' '}
						<span className='fw-bold'>angular-ngx-markdown</span>{' '}
						<a
							href='https://www.npmjs.com/package/ngx-markdown'
							target='_blank'>
							Enlace del la librería
						</a>
					</li>

					<li>
						Puedes usar esta librería si usas Svelte{' '}
						<span className='fw-bold'>svelte-markdown</span>{' '}
						<a
							href='https://www.npmjs.com/package/svelte-markdown'
							target='_blank'>
							Enlace del la librería
						</a>
					</li>

					<li>
						Próximamente investigaremos mas librerías para renderizar markdown
						en diferentes frameworks
					</li>
				</ul>
			</section>
		</>
	)
}
