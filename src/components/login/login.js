import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/auth";
import { withRouter, Redirect } from "react-router";
import app from '../../auth/base'

const Login = ({ history }) => {

	const { register, handleSubmit, watch, errors } = useForm();
	const [user] = useRecoilState(userState)

	const onSubmit = useCallback(
		async input => {
			const { email, password } = input;
			await app.auth().signInWithEmailAndPassword(email, password)
				.then(e => history.push('/'))
				.catch(e => console.error(e.message))
		},
		[history]
	);

	if (user) {
		return <Redirect to="/" />;
	}
	return (
		<div className="flex items-center h-screen w-full bg-gray-100">
			<div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
				<h1 className="block w-full text-center text-grey-darkest mb-6">Sign In</h1>
				<form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col mb-4 md:w-full">
						<label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="email">
							Email
						</label>
						<input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" ref={register} />
					</div>

					<div className="flex flex-col mb-6 md:w-full">
						<label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="password">
							Password
						</label>
						<input
							className="border py-2 px-3 text-grey-darkest"
							type="password"
							name="password"
							id="password"
							ref={register}
						/>
					</div>

					<button
						className="block bg-red-400 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded"
						type="submit"
					>
					 Sign in
					</button>
				</form>
				<a
					className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker"
					href="/register"
				>
					Need an account?
				</a>
			</div>
		</div>
	);
};

export default Login;
