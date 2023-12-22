import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Register = () => {
    const { createUser, googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                navigate(location?.state ? location?.state : '/')
                toast.success('Register successful')
            })
        
    }

    const handleGoogle = () => {
        googleSignUp()
            .then(result => {
                navigate(location?.state ? location?.state : '/')
                toast.success('Registration successful')
        })
    }

    
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <Helmet>
                <title>
                    Do Work | Register
                </title>
            </Helmet>

            <div>
                <img src="https://i.ibb.co/9hG20J9/privacy-policy-concept-illustration-114360-7853.jpg" alt="" />
            </div>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border p-10 rounded-lg">
                    <form className="space-y-6" onSubmit={handleRegister} action="#" method="POST">
                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                                        sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Register</Link>
                    </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogle} className='btn btn-block text-blue-700 '>Google</button>
                </div>
            </div>

            

        </div>
    );
};

export default Register;