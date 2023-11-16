import React from 'react'

export default function Layout({ children }) {
	return (
		<div className='auth-bg d-flex flex-column align-items-center justify-content-center'>
			{children}
		</div>
	)
}
