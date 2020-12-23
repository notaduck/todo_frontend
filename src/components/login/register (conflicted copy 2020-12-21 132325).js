import { useCallback } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import app from '../../auth/base'
import axios from 'axios'

const Register = ({ history }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = useCallback(async input => {
    const { email, password, first_name, last_name } = input;

    await app.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async res => {

        // send user info to backend
        await axios({
          method: 'post',
          url: 'http://localhost:4000/user',
          data: {
            first_name: first_name,
            last_name: last_name,
            firebase_id: res.user.uid,
            email: email
          }
        })

      .catch(e => console.warn(e.message))

  }, [history]);

  return (
    <div className="flex items-center h-screen w-full bg-grey-500">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="block w-full text-center text-grey-darkest mb-6">Sign Up</h1>
        <form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" htmlFor="first_name">First Name</label>
            <input className="border py-2 px-3 text-grey-darkest md:mr-2" type="text" name="first_name" id="first_name" ref={register} />
          </div>
          <div className="flex flex-col mb-4 md:w-1/2">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest md:ml-2" htmlFor="last_name">Last Name</label>
            <input className="border py-2 px-3 text-grey-darkest md:ml-2" type="text" name="last_name" id="last_name" ref={register} />
          </div>
          <div className="flex flex-col mb-4 md:w-full">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="email">Email</label>
            <input className="border py-2 px-3 text-grey-darkest" type="email" name="email" id="email" ref={register} />
          </div>
          <div className="flex flex-col mb-6 md:w-full">
            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="password">Password</label>
            <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" ref={register} />
          </div>
          <button className="block bg-red-300 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
        </form>
        <a className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/login">Already have an account?</a>
      </div>
    </div>
  )
}

export default Register;
