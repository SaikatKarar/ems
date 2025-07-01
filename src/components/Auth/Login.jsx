import React, { useState } from 'react'

function Login({ handleLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-md p-8'>
                <h1 className='text-2xl font-bold text-center text-gray-800 mb-6'>Welcome Back</h1>
                <form className='space-y-6' onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                            Email Address
                        </label>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            type="email"
                            id="email"
                            placeholder='your@email.com'
                            className='w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-1'>
                            Password
                        </label>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            type="password"
                            id="password"
                            placeholder='Enter your password'
                            className='w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                id="remember"
                                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                            />
                            <label htmlFor="remember" className='ml-2 block text-sm text-gray-700'>
                                Remember me
                            </label>
                        </div>

                        <a href="#" className='text-sm text-blue-600 hover:text-blue-500'>
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
                    >
                        Log in
                    </button>
                </form>

                <div className='mt-6 text-center'>
                    <p className='text-sm text-gray-600'>
                        Don't have an account?{' '}
                        <a href="#" className='font-medium text-blue-600 hover:text-blue-500'>
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login