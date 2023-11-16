import React from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
	return (
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
					</div>
				</nav>
			</div>

			<main className=''>{children}</main>
		</>
	)
}
