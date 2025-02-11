import React from 'react'
import FormLink from '../../components/FormLink'
import LoginForm from '../../components/Forms/LoginForm'
import Title from '../../components/Title'

const LoginPage = () => {
	return (
		<div className='container'>
			<div className='max-w-[592px] mx-auto my-[80px] custom rounded-[40px] p-[30px] md:px-[80px] md:py-[100px]'>
				<Title center={true} title={'Войти'} />
				<LoginForm />
				<FormLink link={'register'} word={'Нет аккаунта? Регистрация'} />
			</div>
		</div>
	)
}

export default LoginPage
