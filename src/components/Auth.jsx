import React, { useState } from 'react';
import Dodai from "/dodai.png";
import AuthBG from "/auth.webp";
import { postLogin, postRegister } from '../api/api';
import Swal from 'sweetalert2'
import useAuthStore from '../store/authStore';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { isLoggedIn, setIsLoggedIn } = useAuthStore();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const result = await postLogin({ username: formData.username, password: formData.password });
        console.log('Login successful:', result);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
        });
        sessionStorage.setItem('token', result.token);
        sessionStorage.setItem('user', JSON.stringify(result));
        sessionStorage.setItem('isLogin', true);
        console.log(sessionStorage.getItem('isLogin'));
        setIsLoggedIn(true);
        console.log("result",result);
        window.location.href = '/';
      } else {
        const result = await postRegister(formData);
        console.log('Registration successful:', result);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your account has been created!',
        });
        setIsLogin(true);
         // Switch to login form after successful registration
      }
    } catch (error) {
      console.error('Authentication error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Authentication Error',
        text: 'An error occurred during authentication. Please try again.',
      });
      // Handle error (e.g., show error message)
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{backgroundImage: `url(${AuthBG})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white/30 backdrop-filter backdrop-blur-lg py-10 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-white/20">
      <div className='flex justify-center items-center pb-5'>
        <img src={Dodai} alt="dodai" className='' />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mb-10 text-center text-xl font-extrabold text-black  ">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
      </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
        
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Email address
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-10"
              >
                {isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </div>
          </form>

          <div className="mt-6">
           

            <div className="mt-10 text-center">
        <button
          onClick={toggleForm}
          className="font-medium text-green-700 hover:text-green-700"
        >
          {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
        </button>
      </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default Auth;