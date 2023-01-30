import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  const [signError, setSignError] = useState('')
    const { register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate();
    const location = useLocation();
    const  from = location.state?.from?.pathname || "/";


    const handleLogin = data =>{

    }

    return (
      <div className='flex justify-center items-center pt-8 mb-10'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Login</h1>
     
        </div>
        <form
          onSubmit={handleSubmit(handleLogin)}
       
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            
           
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                 {...register ("email",{
                    required:"email is required"
                   })}
                type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-gray-900 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div>
              <div className='flex justify-between mb-2'>
                <label htmlFor='password' className='text-sm'>
                  Password
                </label>
              </div>
              <input
                 {...register ("password",{
                    required:"at least 6 character"
                   })}
                type='password'
                name='password'
                id='password'
                
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-gray-900 text-gray-900'
              />
               {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>
           
          </div>
          <div className='space-y-2'>
            <div>
             <button className='w-full p-2 bg-gray-900 text-gray-100 rounded mb-2 '>
             Login
             </button>
            </div>
            {
                    signError &&
                    <p className='text-red-600'> {signError.message} </p>
                    
                }

          </div>
        </form>
        
        <p className='px-6 text-sm text-center text-gray-400'>
          Are you new this website please{' '}
          <Link to='/registration' className='hover:underline text-gray-600 text-center'>
            
                Sign Up
            
            
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default Login;