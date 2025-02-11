import React from 'react'
import FormLink from '../../components/FormLink'
import RegisterForm from '../../components/Forms/RegisterForm'
import Title from '../../components/Title'
const RegisterPage = () => {
	return (
		<div className='container'>
			<div className='max-w-[592px] mx-auto my-[80px] custom rounded-[40px] p-[30px] md:px-[80px] md:py-[100px]'>
				<Title center={true} title={'Регистрация'} />
				<RegisterForm />
				<FormLink link={'login'} word={'Уже есть аккаунт? Войти'} />
			</div>
		</div>
	)
}

export default RegisterPage
